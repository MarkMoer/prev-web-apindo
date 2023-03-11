import logo from '../../img/logo Apindo.png';
import { Navbar, Nav, Container ,Offcanvas} from 'react-bootstrap';
import axios from "axios";
import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';


const NavigationAdmin = (props) => {
  const navigate = useNavigate();
const Logout = async() => {
  try {
    await axios.delete('https://api-webapindogsk.vercel.app/logout');
    navigate('/login');
  } catch (error) {
    console.log(error);
  }
}
  const [active, setActive] = useState("default");
  return (
    <React.Fragment>
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="shadow-sm navbarAd" fixed='top'>
          <Container>
            <Navbar.Brand href="/">
              <img src={logo} style={{ width: 110 }} alt='logo' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  {props.name}
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <Nav className="ms-auto" activeKey={active} onSelect={(selectedKey) => setActive(selectedKey)}>
                <Nav.Item className="linkWrapper">
                  <Nav.Link className={`linkItem ${setActive === active ? "active" : "unactive"}`} eventKey="link-0" href="/admin">Beranda</Nav.Link>
                </Nav.Item>
                   <Nav.Item className="linkWrapper">
                  <Nav.Link className={`linkItem ${setActive === active ? "active" : "unactive"}`} eventKey="link-1" href="/admin/pictures">Gambar</Nav.Link>
               </Nav.Item>
               <Nav.Item className="linkWrapper">
                 <Nav.Link className={`linkItem ${setActive === active ? "active" : "unactive"}`} eventKey="link-2" href="/admin/news">Berita</Nav.Link>
               </Nav.Item>
               <Nav.Item className="linkWrapper">
                 <Nav.Link className={`linkItem ${setActive === active ? "active" : "unactive"}`} eventKey="link-3" href="/admin/forms">Formulir</Nav.Link>
               </Nav.Item>
               <Nav.Item className="linkWrapper">
                 <Nav.Link className={`linkItem ${setActive === active ? "active" : "unactive"}`} eventKey="link-4" href="/admin/addAdmin">Tambah Admin</Nav.Link>
               </Nav.Item>
               <Nav.Item className="linkWrapper">
                 <Nav.Link className={`linkItem ${setActive === active ? "active" : "unactive"}`} eventKey="link-5" href="javascript:void(0)" onClick={Logout}>Logout</Nav.Link>
               </Nav.Item>
             </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </React.Fragment>
  );
}

export default NavigationAdmin;