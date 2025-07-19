import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./home.css";
import Star from './star.jsx';
import Pic from "../assets/photo2.jpg";
import { Typewriter } from 'react-simple-typewriter';
import '../App.css'

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};


function landing() {
  return (
    <>
    <Star/>
      <Navbar expand="xl" className='bg'>
  <Container id="cont">
    <Navbar.Brand onClick={() => scrollToSection('home')} id="port">Portfolio</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link onClick={() => scrollToSection('home')} id="block">Home</Nav.Link>
        <Nav.Link onClick={() => scrollToSection('about')} id="block">About Us</Nav.Link>
        <Nav.Link onClick={() => scrollToSection('skills')} id="block">Skills</Nav.Link>
        <Nav.Link onClick={() => scrollToSection('experience')} id="block">Experience</Nav.Link>
        <Nav.Link onClick={() => scrollToSection('project')} id="block">Project</Nav.Link>
        <button id="btn1" onClick={() => scrollToSection('contact')}>Contact Us</button>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

    <div className='container1' id="home">

      <div id="intro">
        <section>
          <h1>Welcome to Our Creative <br />Space </h1>
          <h2>We’re Ishika Arora and Krishika Khandelwal</h2>
           <div style={{ fontSize: '2.5rem', fontFamily: 'monospace' }}>
            We are {' '}
      <span>
        <Typewriter
          words={['Designer + Developer pair', 'Full stack Duo', 'Tech-Passion Driven', 'Creative Thinker']}
          loop={Infinity}
          cursor
          cursorStyle='|'
          typeSpeed={80}
          deleteSpeed={60}
          delaySpeed={1000}
        />
      </span>
      </div>
      </section>
      </div>
      
      <div id="photo">
      <img src={Pic} alt="logo" id="pic" />
   
    </div>
    </div>
   
   </>
    
  
  );
}

export default landing;
import 'bootstrap/dist/css/bootstrap.min.css';

