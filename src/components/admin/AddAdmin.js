import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react'
import { Container} from 'react-bootstrap';
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import "../../css/admin.css";

const AddAdmin = () => {
    const [name, setName] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        refreshToken();
    }, []);
    const axiosJWT = axios.create();
    axiosJWT.interceptors.request.use(async(config) =>{
        const currentDate = new Date();
        if(expire * 1000 < currentDate.getTime()){
            const response = await axios.get('https://api-webapindogsk.vercel.app/token');
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setExpire(decoded.exp);
        }
        return config;
    }, (error) =>{
        return Promise.reject(error);
    });
    const refreshToken = async () => {
        try {
            const response = await axios.get('https://api-webapindogsk.vercel.app/token');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setExpire(decoded.exp);
        } catch (error) {
            if(error.response){
                navigate("/login");
            }
        }
    }
    const addAdmin = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://api-webapindogsk.vercel.app/admins', {
                name: name,
                userName: username,
                password: password,
                confPassword: confPassword
            });
            navigate('/');
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
    return (
        <React.Fragment>
            <Container className="formWrapper">
                <Form onSubmit={addAdmin}>
                    <p className='justify-content-center align-items-center text-center fw-1'>
                        {msg}
                    </p>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>Userame</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label> Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder=" Confirm Password"
                            value={confPassword}
                            onChange={(e) => setConfPassword(e.target.value)}
                        />
                    </Form.Group>
                    <div><Button variant="primary" type="submit">
                        Tambah
                    </Button></div>

                </Form>
            </Container>
        </React.Fragment>
    )
}

export default AddAdmin