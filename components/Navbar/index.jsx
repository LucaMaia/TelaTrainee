import  React from 'react';
import Image from 'next/image'

//Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavbarComponent(){
 return(
    <div>
      <Navbar collapseOnSelect expand="lg" >
      <Container>
        <Navbar.Brand href="#home">
                <Image 
                  src="/LogoTrainee.svg" 
                  width={130} 
                  height={70}
                />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link eventKey={1} href="#deets">
                A G4F
            </Nav.Link>
            <Nav.Link eventKey={2} href="#mees">
              Perfis
            </Nav.Link>
            <Nav.Link eventKey={3} href="#m">
              Etapas do processo seletivo
            </Nav.Link>
            <Nav.Link eventKey={4} href="#g">
              Beneficios
            </Nav.Link>
            <Nav.Link eventKey={5} href="#memes">
              Depoimentos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
 )
}