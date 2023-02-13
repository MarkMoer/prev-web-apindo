import { Container, Row, Col, Card, Image } from "react-bootstrap";
import gb3 from "../img/gb3.jpg";

const Tentang = () => {
  return (
    <Container id="Tentang">
      <Row className="text-center mb-3">
        <Col>
          <h2 className="text-uppercase">Tentang Kami</h2>
        </Col>
      </Row>
      <Row className="justify-content-center fs-5 text-left">
        <Col md={5}>
          <Card className="pictureCard">
            <Image src={gb3} alt="gambar" className="pictures-tentang" />
          </Card>
        </Col>
        <Col md={7}>
          <h5 className="fw-bolder fs-3">
            Bergabunglah dengan kami dan dapatkan informasi terkini seputar
            regulasi atau issue bisnis.
          </h5>
          <p>
            Asosiasi Pengusaha Indonesia adalah organisasi Pengusaha Indonesia
            yang bersifat demokratis, bebas, mandiri dan bertanggung jawab yang
            secara khusus menangani bidang hubungan industrial, ketenagakerjaan,
            investasi dan kegiatan dunia usaha dalam arti yang seluas-luasnya
            dalam rangka mewujudkan pelaksanaan hubungan industrial yang
            harmonis, dinamis dan berkeadilan.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Tentang;
