import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import axios from "axios";
import FileDownload from "js-file-download";
import React, { useState, useEffect } from "react";
const Media = () => {

    const [pictures, setPictures] = useState([]);
    const [news, setNews] = useState([]);

    useEffect(() => {
        getPictures();
        getNews();
    }, []);
    const getPictures = async () => {
        const response = await axios.get("https://api-webapindogsk.cyclic.app/picturesLanding");
        setPictures(response.data);
    }
    const getNews = async () =>{
        const response = await axios.get("https://api-webapindogsk.cyclic.app/newsLanding");
        setNews(response.data);
    }
    const downloadPicture = async (pictureId, pictureName) => {
        try {
            await axios.get(`https://api-webapindogsk.cyclic.app/downloadPicture/${pictureId}`, { responseType: 'blob' }).then((res) => {
                FileDownload(res.data, `${pictureName}.jpg`)
            });

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
        <Container id="Tentang">
            <Row className="text-center mb-3">
                <Col><h2 className="text-uppercase">Media</h2></Col>
            </Row>
            <Row className="justify-content-center fs-5 text-left">
                <Col md>
                    <h4>Galeri Acara</h4>
                    <Row>
                        {pictures.map((picture) => (
                            <Col md={3} className="pictureWrapper" key={picture.id} >
                                <Card className="shadow pictureCard">
                                    <Image src={picture.url} alt="gambar" className="pictures" />
                                    <Card.Body className="picturesTitle">
                                        <Card.Text className=" fw-normal fs-6 text-left">{picture.title}</Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <div className="d-grid gap-2">
                                            <Button variant="outline-dark" size="sm" onClick={() => downloadPicture(picture.id, picture.title)}>Unduh</Button>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <div className="d-grid gap-2">
                        <Button variant="outline-dark mt-3 mb-3" href="/media/pictures">
                            Selengkapnya
                        </Button>
                    </div>
                    <h4>Berita</h4>
                    <Row>
                        {news.map((newsMap) => (
                            <Col md={3} className="pictureWrapper" key={newsMap.id} >
                                <Card className="shadow pictureCard">
                                    <Card.Body className="picturesTitle">
                                        <Card.Text className="fw-bold fs-6 text-left">{newsMap.title}</Card.Text>
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
                    <div className="d-grid gap-2">
                        <Button variant="outline-dark mt-3 mb-3" href="/media/news">
                            Selengkapnya
                        </Button>
                    </div>
                </Col>

            </Row>
        </Container>
    )
}

export default Media