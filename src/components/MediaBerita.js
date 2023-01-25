import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Container, Button, Row, Col, Card} from 'react-bootstrap';
import "../css/landingPage.css";

const MediaBerita = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        getNews();
    }, []);

    const getNews = async () => {
        const response = await axios.get("https://apiwebapindogsk-production.up.railway.app/news");
        setNews(response.data);
    }
    const newsView = async (newsId) => {
        try {
            await axios.get(`https://apiwebapindogsk-production.up.railway.app/media/berita/views/${newsId}` , {responseType: 'blob'}).then(response=>{
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
            <div className='media-berita'>
                <Container >
                    <Row>
                        {news.map((newsMap) => (
                            <Col md={3} className="pictureWrapper" key={newsMap.id} >
                                <Card className="pictureCard">
                                    <Card.Body className="picturesTitle fw-bold">
                                        <Card.Text className="fs-6 text-left">{newsMap.title}</Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <div className="d-grid gap-2">
                                            <Button variant="outline-dark" size="sm" onClick={() => newsView(newsMap.id)}>Lihat</Button>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <div className="kembali">
                        <Button className="mt-2" variant="outline-dark" size="sm" href='/'>Kembali</Button>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default MediaBerita