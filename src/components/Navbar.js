import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useState, useEffect} from 'react';
import logo from '../assets/img/rb_5958.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/icons8-github-60.svg';
import navIcon3 from '../assets/img/icons8-x.svg';
import bootstrap from 'bootstrap';

function NavBar() {
const [activeLink,setActiveLink] = useState('home');
const [scrolled, setScrolled] = useState(false);

useEffect(()=>
{
    const onScroll=()=>{
        if (window.scrollY > 50) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }
    window.addEventListener("scroll",onScroll);

    return ()=> window.removeEventListener("scroll",onScroll);
},[])
    const onUpdateActiveLink = (value)=> {
      setActiveLink(value);
    }
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle> 
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects"
            className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}> Projects</Nav.Link>
            <Nav.Link href="#profiles"
            className={activeLink === 'profiles' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('profiles')}> Profiles</Nav.Link>
          </Nav>

          <span className="navbar-text">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/himavarshini-mahapatruni/" target="_blank"><img src={navIcon1} alt=""/></a>
                <a href="https://github.com/himavarshini28" target="_blank"><img src={navIcon2} alt=""/></a>
                <a href="https://x.com/himavarshini28" target="_blank"><img src={navIcon3} alt=""/></a>
            </div>
            <button type="button" onClick={() => document.getElementById('connect').scrollIntoView({ behavior: 'smooth' })} className="vvd btn btn-outline-light rounded-pill">Let's Connect</button></span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;