import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react'
import { Container} from 'react-bootstrap';
import axios from "axios";
// import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import "../../css/admin.css";

const AddNews = () => {
    const [title, setTitle] = useState("");
    const [file, setFile] = useState("");
    const navigate = useNavigate();
    
    const saveNews = async (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("title", title);
        try {
            await axios.post("https://apiwebapindogsk-production.up.railway.app/news", formData, {
                headers: {
                    "Content-type": "multipart/form-data",
                },
            });
            navigate("/admin/news");
        } catch (error) {
            console.log(error);
        }
    }
    const loadFile = (e) =>{
        const file = e.target.files[0];
        setFile(file);
    }
    return (
        <React.Fragment>
            <Container className="formWrapper">
                <Form onSubmit={saveNews}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nama Berita</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nama Berita"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Input File</Form.Label>
                        <Form.Control type="file" className="file-input" onChange={loadFile} />
                    </Form.Group>
                    <div><Button variant="primary" type="submit">
                        Save
                    </Button></div>

                </Form>
            </Container>
        </React.Fragment>
  )
}

export default AddNews