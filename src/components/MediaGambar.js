import React , { useState, useEffect }  from 'react';
import axios from "axios";
import FileDownload from "js-file-download";
import { Container, Button , Row , Col , Card , Image} from 'react-bootstrap';
import "../css/landingPage.css";

const MediaGambar = () => {
    const [pictures, setPictures] = useState([]);

    useEffect(() => {
        getPictures();
    }, []);

    const getPictures = async () => {
        const response = await axios.get("https://api-webapindogsk.vercel.app/pictures");
        setPictures(response.data);
    }
    const downloadPicture = async (pictureId , pictureName) => {
        try {
            await axios.get(`https://api-webapindogsk.vercel.app/downloadPicture/${pictureId}` , {responseType: 'blob'}).then((res)=>{
                FileDownload(res.data , `${pictureName}.jpg`)
            });
            
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <React.Fragment>
            <div className='media-gambar'>
                <Container >
                    <p className='pt-2 text-center fs-3'>Galeri Acara</p>
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
                                            <Button variant="outline-dark" size="sm"  onClick={() => downloadPicture(picture.id , picture.title)}>Unduh</Button>
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

export default MediaGambar