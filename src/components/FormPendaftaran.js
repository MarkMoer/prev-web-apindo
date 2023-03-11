import React, { useState } from 'react'
import { Container, Row, Form, Col, Button } from 'react-bootstrap'
import "../css/landingPage.css"
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormPendaftaran = () => {
    const [namaPerusahaan, setNamaPerusahaan] = useState('');
    const [alamatPerusahaan, setAlamatPerusahaan] = useState('');
    const [nomorTeleponPerusahaan, setNomorTeleponPerusahaan] = useState('');
    const [emailPerusahaan, setEmailPerusahaan] = useState('');
    const [kecamatan, setKecamatan] = useState('');
    const [namaPIC, setNamaPIC] = useState('');
    const [jabatanPIC, setJabatanPIC] = useState('');
    const [emailPIC, setEmailPIC] = useState('');
    const [nomorPIC, setNomorPIC] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const addForm = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://api-webapindogsk.vercel.app/form', {
                namaPerusahaan: namaPerusahaan,
                alamatPerusahaan: alamatPerusahaan,
                nomorTeleponPerusahaan: nomorTeleponPerusahaan,
                emailPerusahaan: emailPerusahaan,
                kecamatan: kecamatan,
                namaPIC: namaPIC,
                jabatanPIC: jabatanPIC,
                emailPIC: emailPIC,
                nomorPIC: nomorPIC
            });
            toast.info('Formulir Berhasil Dikirim', {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            navigate('/');
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
                toast.error(`${msg}`, {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }
        }
    }
    return (
        <div className="formFrag">
            <Container className="formPendaftaran">
                <h1>Formulir Pendaftaran</h1>
                <Form onSubmit={addForm}>
                <p className='justify-content-center align-items-center text-center fw-1'>
                        {msg}
                    </p>
                    <Row className="mb-3">
                        <Col sm>
                            <Form.Group controlId="formBasicNP">
                                <Form.Label>Nama Perusahaan (lengkap)</Form.Label>
                                <Form.Control type="text" placeholder="Nama Perusahaan" value={namaPerusahaan} onChange={(e) => setNamaPerusahaan(e.target.value)} className="form-control" />
                            </Form.Group>
                        </Col>
                        <Col sm>
                            <Form.Group controlId="formBasicAP">
                                <Form.Label>Alamat Perusahaan (lengkap)</Form.Label>
                                <Form.Control type="text" placeholder="Alamat Perusahaan" value={alamatPerusahaan} onChange={(e) => setAlamatPerusahaan(e.target.value)} className="form-control" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col sm>
                            <Form.Group controlId="formBasicNTP">
                                <Form.Label>Nomor Telepon Perusahaan</Form.Label>
                                <Form.Control aria-label="Mobile Number" type="text" placeholder="Nomor Telepon Perusahaan" aria-describedby="basic-addon1" className="form-control" name="number" value={nomorTeleponPerusahaan} onChange={(e) => setNomorTeleponPerusahaan(e.target.value)} />
                            </Form.Group>
                        </Col>
                        <Col sm>
                            <Form.Group controlId="formBasicEP">
                                <Form.Label>Alamat Email Perusahaan</Form.Label>
                                <Form.Control aria-label="Recipient's username" aria-describedby="basic-addon2" type="email" name="email" placeholder="Email Perusahaan" value={emailPerusahaan} onChange={(e) => setEmailPerusahaan(e.target.value)} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col sm>
                            <Form.Group controlId="formGridKecamatan">
                                <Form.Label>Kecamatan Perusahaan</Form.Label>
                                <Form.Select className="form-control" name="a_state" value={kecamatan} onChange={(e) => setKecamatan(e.target.value)}>
                                    <option>Pilih Kecamatan</option>
                                    <option value="Balongpanggang">Balongpanggang</option>
                                    <option value="Benjeng">Benjeng</option>
                                    <option value="Bungah">Bungah</option>
                                    <option value="Cerme">Cerme</option>
                                    <option value="Driyorejo">Driyorejo</option>
                                    <option value="Duduk Sampeyan">Duduk Sampeyan</option>
                                    <option value="Gresik">Gresik</option>
                                    <option value="Kebomas">Kebomas</option>
                                    <option value="Kedamean">Kedamean</option>
                                    <option value="Manyar">Manyar</option>
                                    <option value="Menganti">Menganti</option>
                                    <option value="Panceng">Panceng</option>
                                    <option value="Sangkapura">Sangkapura</option>
                                    <option value="Sidayu">Sidayu</option>
                                    <option value="Tambak">Tambak</option>
                                    <option value="Ujung Pangkah">Ujung Pangkah</option>
                                    <option value="Wringinanom">Wringinanom</option>

                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col sm>
                            <Form.Group controlId="formGridNPIC">
                                <Form.Label>Nama lengkap Person in Charge (PIC) dengan GELAR</Form.Label>
                                <Form.Control className="form-control" type="text" placeholder="Nama Lengkap PIC" name="name" value={namaPIC} onChange={(e) => setNamaPIC(e.target.value)} />
                            </Form.Group>
                        </Col>
                        <Col sm>
                            <Form.Group controlId="formGridJPIC">
                                <Form.Label>Jabatan PIC di Perusahaan</Form.Label>
                                <Form.Control className="form-control" type="text" name="text" placeholder="Jabatan di Perusahaan" value={jabatanPIC} onChange={(e) => setJabatanPIC(e.target.value)} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col sm>
                            <Form.Group controlId="formGridEPIC">
                                <Form.Label>Alamat Email PIC</Form.Label>
                                <Form.Control className="form-control" type="text" placeholder="Alamat Email PIC" name="email" value={emailPIC} onChange={(e) => setEmailPIC(e.target.value)} />
                            </Form.Group>
                        </Col>
                        <Col sm>
                            <Form.Group controlId="formGridNPIC">
                                <Form.Label>Nomor Handphone PIC</Form.Label>
                                <Form.Control className="form-control" type="text" placeholder="Nomor Handphone PIC" name="number" value={nomorPIC} onChange={(e) => setNomorPIC(e.target.value)} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <div className="mb-2"><Button variant="primary" type="submit">
                        Kirim
                    </Button></div>
                </Form>
            </Container>
        </div>
    )
}

export default FormPendaftaran