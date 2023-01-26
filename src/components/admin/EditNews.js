import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react'
import { Container, Figure } from 'react-bootstrap';
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useParams, useNavigate } from 'react-router-dom';
import "../../css/admin.css";

const EditNews = () => {
    const [title, setTitle] = useState("");
    const [file, setFile] = useState("");
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getNewsById();
        refreshToken();
    }, []);

    const axiosJWT = axios.create();
    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get('https://api-webapindogsk.cyclic.app/token');
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setExpire(decoded.exp);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

    const refreshToken = async () => {
        try {
            const response = await axios.get('https://api-webapindogsk.cyclic.app/token');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setExpire(decoded.exp);
        } catch (error) {
            if (error.response) {
                navigate("/login");
            }
        }
    }

    const getNewsById = async () => {
        const response = await axios.get(`https://api-webapindogsk.cyclic.app/news/${id}`);
        setTitle(response.data.title);
        setFile(response.data.image);
    };

    const loadFile = (e) => {
        const file = e.target.files[0];
        setFile(file);
    }

    const updateNews = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("title", title);
        try {
            await axios.patch(`https://api-webapindogsk.cyclic.app/news/${id}`, formData, {
                headers: {
                    "Content-type": "multipart/form-data",
                },
            });
            navigate("/admin/news");
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <React.Fragment>
            <Container className="formWrapper">
                <Form onSubmit={updateNews}>
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
                    Update
                    </Button></div>

                </Form>
            </Container>
        </React.Fragment>
    )
}

export default EditNews