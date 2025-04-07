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
                <Navbar.Brand href={prefix + "/"}>Dylan Benson</Navbar.Brand>
                <Nav>
                    <Nav.Item as="li">
                        <Nav.Link href={prefix + "/"}>Home</Nav.Link>
                    </Nav.Item>
                </Nav>
                <NavDropdown title="Projects">
                    <NavDropdown.Item href={prefix + "/projects"}>
                        Project
                    </NavDropdown.Item>
                </NavDropdown>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;