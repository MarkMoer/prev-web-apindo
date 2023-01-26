import { Container, Card, Button, Row, Col} from "react-bootstrap";
import React, { useState, useEffect } from "react";
import NavigationAdmin from "./NavigationAdmin";
import axios from "axios";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import "../../css/admin.css";

const SetNews = () => {

    const [news, setNews] = useState([]);
    const [setToken]= useState('');
    const [expire, setExpire] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        refreshToken();
        getNews();
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const refreshToken = async () => {
        try {
            const response = await axios.get('https://api-webapindogsk.cyclic.app/token');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setExpire(decoded.exp);
        } catch (error) {
            if(error.response){
                navigate("/login");
            };
        };
    };

    const axiosJWT = axios.create();
    axiosJWT.interceptors.request.use(async(config) =>{
        const currentDate = new Date();
        if(expire * 1000 < currentDate.getTime()){
            const response = await axios.get('https://api-webapindogsk.cyclic.app/token');
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setExpire(decoded.exp);
        }
        return config;
    }, (error) =>{
        return Promise.reject(error);
    });
    const getNews = async () => {
        const response = await axios.get("https://api-webapindogsk.cyclic.app/news");
        setNews(response.data);
    }
    
    const deleteNews = async (newsId) => {
        try {
            await axios.delete(`https://api-webapindogsk.cyclic.app/news/${newsId}`);
            getNews();
        } catch (error) {
            console.log(error);
        }
    }
    const newsView = async (newsId) => {
        try {
            await axios.get(`https://api-webapindogsk.cyclic.app/media/berita/views/${newsId}` , {responseType: 'blob'}).then(response=>{
                const file = new Blob([response.data] , {type:'application/pdf'});
                const fileURL = URL.createObjectURL(file);
                window.open(fileURL); 
            });
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <React.Fragment>
            <section className="jumbotron-news">
                <NavigationAdmin />
                <Container>
                    <Link to="/admin/addNews" >
                        <Button variant="outline-dark" className="tambah-gambar">Tambah Berita</Button>
                    </Link>
                    <Row>
                        {news.map((news) => (
                            <Col md={3} className="pictureWrapper" key={news.id} >
                                <Card className="pictureCard">
                                    <Card.Body className="picturesTitle">
                                        <Card.Text className=" fw-normal fs-6 text-left">{news.title}</Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <div className="d-grid gap-2">
                                            <Link to={`/admin/editNews/${news.id}`} className="d-grid gap-2" style={{ textDecoration: "none" }}>
                                                <Button variant="outline-primary" size="sm">Edit</Button>{' '}
                                            </Link>
                                            <Button variant="outline-danger" size="sm" onClick={() => deleteNews(news.id)}>Delete</Button>{' '}
                                            <Button variant="outline-success" size="sm" onClick={() => newsView(news.id)} >View</Button>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default SetNews