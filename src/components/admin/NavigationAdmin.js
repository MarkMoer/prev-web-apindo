import logo from '../../img/logo Apindo.png';
import { Navbar, Nav, Container } from 'react-bootstrap';
import axios from "axios";
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';


const NavigationAdmin = ({ refs }) => {
  const navigate = useNavigate();
const Logout = async() => {
  try {
    await axios.delete('https://apiwebapindogsk-production.up.railway.app/logout');
    navigate('/login');
  } catch (error) {
    console.log(error);
  }
}
  const [active, setActive] = useState("default");
  return (
    <div id="navbar" className="navbar">
      <Navbar expand='lg' fixed="top" className='shadow-sm'>
        <Container>
          <Navbar.Brand href="/admin">
            <img src={logo} style={{ width: 110 }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
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
                <Nav.Link className={`linkItem ${setActive === active ? "active" : "unactive"}`} eventKey="link-3" href="/admin/addAdmin">Tambah Admin</Nav.Link>
              </Nav.Item>
              <Nav.Item className="linkWrapper">
                <Nav.Link className={`linkItem ${setActive === active ? "active" : "unactive"}`} eventKey="link-4" href="javascript:void(0)" onClick={Logout}>Logout</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationAdmin;