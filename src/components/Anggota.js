import { Container, Row, Col, Button } from "react-bootstrap";

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
            <div className="d-grid gap-2 formButton ">
                <Button variant="outline-dark mt-3 mb-3 text-uppercase" size="lg">
                    Formulir Pendaftaran
                </Button>
            </div>

        </Container >
    )
}

export default Anggota