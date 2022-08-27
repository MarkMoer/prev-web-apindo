import { Container, Row, Col } from "react-bootstrap";

const Anggota = () => {
    return (
        <Container id="Tentang">
            <Row className="text-center mb-3">
                <Col><h2 className="text-uppercase">Anggota</h2></Col>
            </Row>
            <Row className="justify-content-center fs-5 text-left">
                <Col md><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur ipsum, doloribus facere voluptatum omnis possimus eius quos autem voluptatibus, aliquam sit deleniti aut nam expedita!</p></Col>
                <Col md><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus nam delectus quod recusandae corporis sapiente magni neque voluptatem non repellendus quam molestias blanditiis repellat quidem corrupti optio, error ea culpa.</p></Col>
            </Row>
        </Container>
    )
}

export default Anggota