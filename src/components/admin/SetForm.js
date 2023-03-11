import axios from 'axios'
import React, { useState, useEffect } from 'react'
import NavigationAdmin from "./NavigationAdmin";
import { Button, Container, Card } from 'react-bootstrap'
import * as xlsx from "xlsx";
import FileDownload from "js-file-download"
import "../../css/admin.css";
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';


const SetForm = () => {
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
  }, []);
  const refreshToken = async () => {
    try {
      const response = await axios.get('https://api-webapindogsk.vercel.app/token');
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setExpire(decoded.exp);
    } catch (error) {
      if (error.response) {
        navigate("/login");
      }
    }
  }
  const axiosJWT = axios.create();
  axiosJWT.interceptors.request.use(async (config) => {
    const currentDate = new Date();
    if (expire * 1000 < currentDate.getTime()) {
      const response = await axios.get('https://api-webapindogsk.vercel.app/token');
      config.headers.Authorization = `Bearer ${response.data.accessToken}`;
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setExpire(decoded.exp);
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });
  const viewForm = async () => {
    try {
      const fileType = "xlsx"
      const response = await axios.get("https://api-webapindogsk.vercel.app/form");
      const data = [];
      // EXTRACT DATA FROM DATABASE
      response.data.forEach(row => {
        data.push([row["namaPerusahaan"], row["alamatPerusahaan"], row["nomorTeleponPerusahaan"], row["emailPerusahaan"], row["kecamatan"], row["namaPIC"], row["jabatanPIC"], row["emailPIC"], row["nomorPIC"]])
      });
      // WRITE TO EXCEL FILE
      let header = ["Nama Perusahaan", "Alamat Perusahaan", "Nomor Telp Perusahaan", "Email Perusahaan", "Kecamatan Perusahaan", "Nama PIC", "Jabatan PIC", "Email PIC", "Nomor PIC"];
      const workbook = xlsx.utils.book_new();
      xlsx.utils.sheet_add_aoa(workbook, [header]);
      xlsx.utils.sheet_add_json(workbook, data, { origin: 'A2', skipHeader: true });
      const wb = { Sheets: { 'data': workbook }, SheetNames: ['data'] };
      const excelBuffer = xlsx.write(wb, { bookType: 'xlsx', type: 'array', cellStyles: true });
      const finalData = new Blob([excelBuffer], { type: fileType });
      FileDownload(finalData, "Data.xlsx");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <React.Fragment>
      <div className="jumbotron-formAdmin">
        <NavigationAdmin />
        <Container className='formAdminWrap'>
          <div className='formAdmin'>
            <Card className="text-center ">
              <Card.Body className="picturesTitle fw-bold">
                <Card.Text className="fs-6 text-left">Unduh Data Formmulir Pendaftaran</Card.Text>
              </Card.Body>
              <Card.Footer>
                <div className="d-grid gap-2">
                  <Button variant="outline-dark" size="sm" onClick={() => viewForm()} >Unduh</Button>
                </div>
              </Card.Footer>
            </Card>
          </div>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default SetForm