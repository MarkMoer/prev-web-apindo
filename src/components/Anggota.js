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
          <p>Dwi Ken Hendrawanto, SH (PT Ocean Gemindo)</p>
          <p className="fw-bold mb-0">Ketua</p>
          <p>Alfan Wahyuddin, ST,MM (PT Asuka Engineering Indonesia)</p>
          <p className="fw-bold mb-0">Wakil Ketua I</p>
          <p>Herry Wahyono, SE.Ak (PT Kompindo Wiratama)</p>
          <p className="fw-bold mb-0">Wakil Ketua II</p>
          <p>Riduwan, SH (PT Nankai Indonesia)</p>
        </Col>
        <Col md>
          <p className="fw-bold mb-0">Wakil Ketua III</p>
          <p>Muhammad Nur Yusuf (PT Unggul Energi Engineering)</p>
          <p className="fw-bold mb-0">Sekretaris</p>
          <p>Ngadi, SH, MH (PT Multimegah Indahjaya)</p>
          <p className="fw-bold mb-0">Wakil Sekretaris</p>
          <p>dr. Lukita Hanggraeni (PT Petro Graha Medika)</p>
          <p className="fw-bold mb-0">Bendahara</p>
          <p>Lidia Afrilia, SPsi, MM, MH (Pt Keramik Diamond Industries)</p>
        </Col>
      </Row>
      <div className="d-grid gap-2 formButton pt-2">
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
