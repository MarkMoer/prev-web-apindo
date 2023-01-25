import logo from '../img/logo Apindo.png';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navigation = ({ refs }) => {
  const goto = (ref) => {
    window.scrollTo({
      top: ref.offsetTop - 48,
      left: 0,
      behavior: 'smooth'
    })
  }
  const navigate = useNavigate();
  const Login = async() => {
    navigate('/login');
  }
  const [active, setActive] = useState("default");
  return (
    <div id="navbar" className="navbar">
      <Navbar expand='lg' fixed="top" className='shadow-sm'>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} style={{ width: 110 }} alt='logo'/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" activeKey={active} onSelect={(selectedKey) => setActive(selectedKey)}>
              <Nav.Item className="linkWrapper">
                <Nav.Link className={`linkItem ${setActive === active ? "active" : "unactive"}`} eventKey="default" href="javascript:void(0)" onClick={() => goto(refs.berandaRef.current)}>Beranda</Nav.Link>
              </Nav.Item>
              <Nav.Item className="linkWrapper">
                <Nav.Link className={`linkItem ${setActive === active ? "active" : "unactive"}`} eventKey="link-1" href=" javascript:void(0)" onClick={() => goto(refs.tentangRef.current)}>Tentang</Nav.Link>
              </Nav.Item>
              <Nav.Item className="linkWrapper">
                <Nav.Link className={`linkItem ${setActive === active ? "active" : "unactive"}`} eventKey="link-2" href="javascript:void(0)" onClick={() => goto(refs.anggotaRef.current)}>Anggota</Nav.Link>
              </Nav.Item>
              <Nav.Item className="linkWrapper">
                <Nav.Link className={`linkItem ${setActive === active ? "active" : "unactive"}`} eventKey="link-3" href="javascript:void(0)" onClick={() => goto(refs.mediaRef.current)}>Media</Nav.Link>
              </Nav.Item>
              <Nav.Item className="linkWrapper">
                <Nav.Link className={`linkItem ${setActive === active ? "active" : "unactive"}`} eventKey="link-4" href="javascript:void(0)" onClick={() => goto(refs.kontakRef.current)}>Kontak</Nav.Link>
              </Nav.Item>
              <Nav.Item className="linkWrapper">
                <Nav.Link className={`linkItem ${setActive === active ? "active" : "unactive"}`} eventKey="link-5" href="javascript:void(0)" onClick={Login}>Login</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;