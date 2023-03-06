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
                    <p className="mb-0">Jl. Qomaruddin, Pedukuhan, Kebomas, Kec. Kebomas, Kabupaten Gresik, Jawa Timur</p>
                    <p className="fw-bold">Buka: 08:00 - 17:00 WIB</p>
                </Col>
                <Col md>
                    <h4>
                        No.Telepon
                    </h4>
                    <p>
                    <FontAwesomeIcon icon={faPhone}/> : (031) 3975757
                    </p>
                    <h4>
                        Email
                    </h4>
                    <p>
                    <FontAwesomeIcon icon={faEnvelope}/> : info@apindojatim.com
                    </p>
                    
                </Col>
            </Row>
        </Container>
    )
}

export default Kontak