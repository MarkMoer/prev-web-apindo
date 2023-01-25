import { Container, Row, Col } from "react-bootstrap";

const Tentang = () => {
    return (
        <Container id="Tentang">
            <Row className="text-center mb-3">
                <Col><h2 className="text-uppercase">Tentang Kami</h2></Col>
            </Row>
            <Row className="justify-content-center fs-5 text-left">
                <Col md>
                    <h5 className="fw-bolder">Apa itu APINDO ?</h5>
                    <p>Asosiasi Pengusaha Indonesia adalah organisasi Pengusaha Indonesia yang bersifat demokratis, bebas, mandiri dan bertanggung jawab yang secara khusus menangani bidang hubungan industrial, ketenagakerjaan, investasi dan kegiatan dunia usaha dalam arti yang seluas-luasnya dalam rangka mewujudkan pelaksanaan hubungan industrial yang harmonis, dinamis dan berkeadilan.</p></Col>
                <Col md>
                    <h5 className="fw-bolder">Sejarah APINDO </h5>
                    <p> 1. Tanggal 31 Januari 1952 didirikan berbentuk yayasan yang diberi nama “Badan Permusyawaratan Urusan Sosial Ekonomi Pengusaha Indonesia” yang disingkat “PUSPI”.</p>
                        <p>2. 7 Juli 1970 berubah nama menjadi “Perkumpulan Badan Permusyawaratan Urusan Sosial Ekonomi Pengusaha Seluruh Indonesia” dengan singkatan tetap “PUSPI”.</p>
                        <p>3. 16 Januari 1982 pada MUNAS I di Yogjakarta namanya berubah menjadi “Perhimpunan Urusan Sosial Ekonomi Pengusaha Seluruh Indonesia” dengan singkatan tetap “PUSPI”.</p>
                        <p>4. 29 Januari 1985 pada MUNAS II di Surabaya namanya berubah menjadi “Asosiasi Pengusaha Indonesia” yang disingkat “APINDO”.</p>
                        </Col>
            </Row>
        </Container>
    )
}

export default Tentang