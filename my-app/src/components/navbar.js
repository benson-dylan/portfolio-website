import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

const prefix = "/portfolio-website";

function NavigationBar()
{
    return(
        <Navbar className="navBar" fixed="top" expand="lg">
            <Container>
                <Navbar.Brand href={prefix + "/"} style={{fontSize:'16pt'}}>Dylan Benson</Navbar.Brand>
                <div className="navCenter">
                    <Nav>
                        <Nav.Item as="li" style={{marginRight:'1vw'}}>
                            <Nav.Link href={prefix + "/"}>Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li" style={{marginRight:'1vw'}}>
                            <Nav.Link href={prefix + "/about"}>About Me</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <NavDropdown title="Projects">
                        <NavDropdown.Item href={prefix + "/projects"}>
                            ELLEvation
                        </NavDropdown.Item>
                        <NavDropdown.Item href={prefix + "/projects"}>
                            Reserv
                        </NavDropdown.Item>
                        <NavDropdown.Item href={prefix + "/projects"}>
                            MazeGame
                        </NavDropdown.Item>
                    </NavDropdown>
                </div>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;