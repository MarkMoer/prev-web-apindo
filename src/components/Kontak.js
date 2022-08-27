import { Container, Row, Col } from "react-bootstrap";
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone , faEnvelope} from '@fortawesome/free-solid-svg-icons'
import Maps from "./utilities/Maps";

const Kontak = () => {
    return (
        <Container id="media">
            <Row className="text-center mb-3">
                <Col><h2 className="text-uppercase">Kontak kami</h2></Col>
            </Row>
            <Row className="justify-content-center fs-5 text-left">
                <Col md>
                    <h4>
                        Alamat
                    </h4>
                    <Maps/>
                    <p>Jl. Qomaruddin, Pedukuhan, Kebomas, Kec. Kebomas, Kabupaten Gresik, Jawa Timur</p>
                </Col>
                <Col md>
                    <h4>
                        No.Telepon
                    </h4>
                    <p>
                    <FontAwesomeIcon icon={faPhone}/> : 1234567890
                    </p>
                    <h4>
                        Email
                    </h4>
                    <p>
                    <FontAwesomeIcon icon={faEnvelope}/> : 1234567890@gmail.com
                    </p>
                    
                </Col>
            </Row>
        </Container>
    )
}

export default Kontak