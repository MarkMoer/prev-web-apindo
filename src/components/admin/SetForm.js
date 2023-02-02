import axios from 'axios'
import React from 'react'
import { Button } from 'react-bootstrap'
import * as xlsx from "xlsx";
import FileDownload from "js-file-download"
// import * as FileSaver from 'file-saver';

const SetForm = () => {
  const viewForm = async () => {
    try {
      const fileType = "xlsx"
      const response = await axios.get("https://api-webapindogsk.cyclic.app/form");
      // console.log(response.data);
      // const ws = xlsx.utils.json_to_sheet(response.data);
      // const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
      // const excelBuffer = xlsx.write(wb, { bookType: "xlsx", type: "array" });
      // const data = new Blob([excelBuffer], { type: fileType });
      // FileSaver.saveAs(data, "Data"+".xlsx")

          const data = [];
          // EXTRACT DATA FROM DATABASE
          response.data.forEach(row =>{
              data.push([row["namaPerusahaan"], row["alamatPerusahaan"], row["nomorTeleponPerusahaan"], row["emailPerusahaan"], row["kecamatan"], row["namaPIC"], row["jabatanPIC"], row["emailPIC"], row["nomorPIC"]])
          });
          // WRITE TO EXCEL FILE
          let header = ["Nama Perusahaan", "Alamat Perusahaan", "Nomor Telp Perusahaan", "Email Perusahaan", "Kecamatan Perusahaan", "Nama PIC", "Jabatan PIC" , "Email PIC", "Nomor PIC"];
          const workbook = xlsx.utils.book_new();
          xlsx.utils.sheet_add_aoa(workbook , [header]);
          xlsx.utils.sheet_add_json(workbook, data, { origin: 'A2', skipHeader: true });
          const wb = { Sheets: { 'data': workbook }, SheetNames: ['data'] };
          const excelBuffer = xlsx.write(wb, { bookType: 'xlsx', type: 'array', cellStyles:true });
          const finalData = new Blob([excelBuffer], { type: fileType });
          FileDownload(finalData , "Data.xlsx");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Button variant="outline-success" size="sm" onClick={() => viewForm()} >Download Excel</Button>
  )
}

export default SetForm