import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Beranda from "./components/Beranda.js";
import FormPendaftaran from "./components/FormPendaftaran.js";
import MediaGambar from "./components/MediaGambar.js";
import MediaBerita from "./components/MediaBerita.js";
import Login from "./components/Login.js";
import DashboardAdmin from "./components/admin/DashboardAdmin.js";
import EditPictures from "./components/admin/EditPictures.js";
import EditNews from "./components/admin/EditNews.js";
import SetForm from "./components/admin/SetForm.js";
import SetPicture from "./components/admin/SetPictures.js";
import SetNews from "./components/admin/SetNews.js";
import AddAdmin from "./components/admin/AddAdmin.js";
import AddPictures from "./components/admin/AddPictures.js";
import AddNews from "./components/admin/AddNews.js";
import "./css/landingPage.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Beranda/>}/>
        <Route path="/anggota/form" element={<FormPendaftaran/>}/>
        <Route path="/media/pictures" element={<MediaGambar/>}/>
        <Route path="/media/news" element={<MediaBerita/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/admin" element={<DashboardAdmin/>}/>
        <Route path="/admin/pictures" element={<SetPicture/>}/>
        <Route path="/admin/forms" element={<SetForm/>}/>
        <Route path="/admin/news" element={<SetNews/>}/>
        <Route path="/admin/addPictures" element={<AddPictures/>}/>
        <Route path="/admin/addAdmin" element={<AddAdmin/>}/>
        <Route path="/admin/addNews" element={<AddNews/>}/>
        <Route path="/admin/editPictures/:id" element={<EditPictures/>}/>
        <Route path="/admin/editNews/:id" element={<EditNews/>}/>
      </Routes>
    </Router>
  );
}

export default App;
