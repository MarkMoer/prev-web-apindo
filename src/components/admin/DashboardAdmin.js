import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import NavigationAdmin from './NavigationAdmin.js';
import BerandaAd from './BerandaAd.js';
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import "../../css/admin.css";

const DashboardAdmin = () => {

    const setPicRef = useRef(null)
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        refreshToken();
    }, []);
    const refreshToken = async () => {
        try {
            const response = await axios.get('https://api-webapindogsk.vercel.app/token',);
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        } catch (error) {
            console.log(error);
            if(error.response){
                navigate("/login");
            }
        }
    }
    const axiosJWT = axios.create();
    axiosJWT.interceptors.request.use(async(config) =>{
        const currentDate = new Date();
        if(expire * 1000 < currentDate.getTime()){
            const response = await axios.get('https://api-webapindogsk.vercel.app/token');
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        }
        return config;
    }, (error) =>{
        return Promise.reject(error);
    });

    return (
        <React.Fragment>
            <section className='berandaAd' ref={setPicRef}>
                <NavigationAdmin name={name}/>
                <BerandaAd name={name}/>
            </section>
        </React.Fragment>
    )
}

export default DashboardAdmin