import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from '../img/logo Apindo.png';
import { Col, Button, Row, Container, Card, Form, Image } from "react-bootstrap";

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://apiwebapindogsk-production.up.railway.app/login', {
                userName: userName,
                password: password
            });
            navigate("/admin");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
    return (
        <div>
            <Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={8} lg={6} xs={12}>
                        <div className="border border-2 border-primary"></div>
                        <Card className="shadow px-4">
                            <Card.Body>
                                <div className="mb-3 mt-md-4">
                                    <div className='text-center m-2'>
                                        <Image src={logo} style={{ width: 135 }} />
                                    </div>
                                    <div className="mb-3">
                                        <p className='justify-content-center align-items-center text-center fw-1'>
                                            {msg}
                                        </p>
                                        <Form onSubmit={Auth}>
                                            <Form.Group className="mb-3" controlId="Username">
                                                <Form.Label className="text-center">
                                                    Username
                                                </Form.Label>
                                                <Form.Control type="text" placeholder="Enter Username" value={userName} onChange={(e) => setUserName(e.target.value)} />
                                            </Form.Group>

                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicPassword"
                                            >
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                            </Form.Group>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicPassword"
                                            >
                                            </Form.Group>
                                            <div className="d-grid">
                                                <Button variant="primary" type="submit">
                                                    Login
                                                </Button>
                                            </div>
                                            <div className="d-grid mt-2">
                                                <Button variant="dark" href="/">
                                                    Kembali
                                                </Button>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login