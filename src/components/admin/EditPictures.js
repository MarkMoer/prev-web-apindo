import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react'
import { Container, Figure } from 'react-bootstrap';
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useParams, useNavigate } from 'react-router-dom';
import "../../css/admin.css";

const EditPictures = () => {
    const [title, setTitle] = useState("");
    const [file, setFile] = useState("");
    const [preview, setPreview] = useState("");
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const{id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getPictureById();
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

    const getPictureById = async () =>{
        const response = await axios.get(`https://api-webapindogsk.vercel.app/pictures/${id}`);
        setTitle(response.data.title);
        setFile(response.data.image);
        setPreview(response.data.url);

    };

    const loadImage = (e) => {
        const image = e.target.files[0];
        setFile(image);
        setPreview(URL.createObjectURL(image));
    }
    const updatePicture = async (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("title", title);
        try {
            await axios.patch(`https://api-webapindogsk.vercel.app/pictures/${id}`, formData, {
                headers: {
                    "Content-type": "multipart/form-data",
                },
            });
            navigate("/admin/pictures");
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <React.Fragment>
            <Container className="formWrapper">
                <Form onSubmit={updatePicture}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nama Gambar</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nama Gambar"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Input File</Form.Label>
                        <Form.Control type="file" className="file-input" onChange={loadImage} />
                    </Form.Group>
                    {preview ? (
                        <Figure>
                            <Figure.Image
                                width={200}
                                height={180}
                                alt="Preview"
                                src={preview}
                            />
                        </Figure>) : ("")}
                    <div><Button variant="primary" type="submit">
                        Update
                    </Button></div>

                </Form>
            </Container>
        </React.Fragment>
    )
}

export default EditPictures