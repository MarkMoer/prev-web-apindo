import { Container, Row, Col, Button } from "react-bootstrap";

const Anggota = () => {
  return (
    <Container id="Tentang">
      <Row className="text-center mb-3">
        <Col>
          <h2 className="text-uppercase">Anggota</h2>
        </Col>
      </Row>
      <Row className="justify-content-center fs-5 text-left">
        <Col md>
          <p className="fw-bold mb-0">Dewan Pertimbangan</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p className="fw-bold mb-0">Ketua</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p className="fw-bold mb-0">Wakil Ketua I</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p className="fw-bold mb-0">Wakil Ketua II</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </Col>
        <Col md>
          <p className="fw-bold mb-0">Wakil Ketua III</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p className="fw-bold mb-0">Sekretaris</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p className="fw-bold mb-0">Wakil Sekretaris</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p className="fw-bold mb-0">Bendahara</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </Col>
      </Row>
      <div className="d-grid gap-2 formButton ">
        <Button
          variant="outline-dark mt-3 mb-3 text-uppercase"
          size="lg"
          href="/anggota/form"
        >
          Formulir Pendaftaran
        </Button>
      </div>
    </Container>
  );
};
export default Anggota;
