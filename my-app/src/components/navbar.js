import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import "../styles/index.css";

import github from "../images/githubblack.png";
import linkedin from "../images/linkedin-black.png";

const prefix = "/portfolio-website";


function NavigationBar()
{
    const handleClick = (website) => {
        window.open(website, '_blank', 'noopener,noreferrer');
    };

    const navigate = useNavigate();

    return(
        <Navbar className="navBar" fixed="top" expand="lg">
            <Container>
                <Navbar.Brand href={prefix + "/"} style={{fontSize:'14pt'}}>Dylan Benson</Navbar.Brand>
                <div className="navCenter">
                    <Nav>
                        <Nav.Item as="li" style={{marginRight:'1.2vw'}}>
                            <Nav.Link onClick={() => navigate(prefix + "/")}>Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li" style={{marginRight:'1.2vw'}}>
                            <Nav.Link onClick={() => navigate(prefix + "/about")}>About Me</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link onClick={() => navigate(prefix + "/projects")}>Projects</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
                <div id="navSocials">
                    <button className='navLogo' alt="Black Github Logo" onClick={() => handleClick("https://github.com/benson-dylan")}>
                        <img id="githubLogo" src={github}/>
                    </button>
                    <button className='navLogo' alt="Black LinkedIn Logo" onClick={() => handleClick("https://www.linkedin.com/in/dylan-benson2/")}>
                        <img id='linkedinLogo' src={linkedin}/>
                    </button>
                </div>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;