import { Container, Card, Button, Row, Col, Image } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import NavigationAdmin from "./NavigationAdmin";
import axios from "axios";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import "../../css/admin.css";
const SetPictures = () => {

    const [pictures, setPictures] = useState([]);
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        refreshToken();
        getPictures();
    }, []);
    const axiosJWT = axios.create();
    axiosJWT.interceptors.request.use(async(config) =>{
        const currentDate = new Date();
        if(expire * 1000 < currentDate.getTime()){
            const response = await axios.get('https://apiwebapindogsk-production.up.railway.app/token');
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setExpire(decoded.exp);
        }
        return config;
    }, (error) =>{
        return Promise.reject(error);
    });
    const getPictures = async () => {
        const response = await axios.get("https://apiwebapindogsk-production.up.railway.app/pictures");
        setPictures(response.data);
    }
    const deletePicture = async (pictureId) => {
        try {
            await axios.delete(`https://apiwebapindogsk-production.up.railway.app/pictures/${pictureId}`);
            getPictures();
        } catch (error) {
            console.log(error);
        }
    }
    const refreshToken = async () => {
        try {
            const response = await axios.get('https://apiwebapindogsk-production.up.railway.app/token');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setExpire(decoded.exp);
        } catch (error) {
            if(error.response){
                navigate("/login");
            }
        }
    }
    
    return (
        <React.Fragment>
            <div className="jumbotron-picture">
                <NavigationAdmin />
                <Container>
                    <Link to="/admin/addPictures" >
                        <Button variant="outline-dark" className="tambah-gambar">Tambah Gambar</Button>
                    </Link>
                    <Row>
                        {pictures.map((picture) => (
                            <Col md={3} className="pictureWrapper" key={picture.id} >
                                <Card className="pictureCard">
                                    <Image src={picture.url} alt="gambar" className="pictures" />
                                    <Card.Body className="picturesTitle">
                                        <Card.Text className=" fw-normal fs-6 text-left">{picture.title}</Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <div className="d-grid gap-2">
                                            <Link to={`/admin/editPictures/${picture.id}`} className="d-grid gap-2" style={{textDecoration:"none"}}>
                                                <Button variant="outline-primary" size="sm">Edit</Button>{' '}
                                            </Link>
                                            <Button variant="outline-danger" size="sm" onClick={() => deletePicture(picture.id)}>Delete</Button>{' '}
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}
export default SetPictures;