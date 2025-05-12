import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import "../styles/index.css";

const prefix = "/portfolio-website";


function NavigationBar()
{
    return(
        <Navbar className="navBar" fixed="top" expand="lg">
            <Container>
                <Navbar.Brand href={prefix + "/"} style={{fontSize:'18pt'}}>Dylan Benson</Navbar.Brand>
                <div className="navCenter">
                    <Nav>
                        <Nav.Item as="li" style={{marginRight:'1.2vw'}}>
                            <Nav.Link href={prefix + "/"}>Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li" style={{marginRight:'1.2vw'}}>
                            <Nav.Link href={prefix + "/about"}>About Me</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href={prefix + "/projects"}>Projects</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;