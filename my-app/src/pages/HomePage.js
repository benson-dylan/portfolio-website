import React from 'react';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import * as motion from "motion/react-client";

import NavigationBar from '../components/navbar';

import luffyImg from "../images/luffypfp.jpg";
import appleCat from "../images/applecat.jpg";
import jacketMonkey from "../images/monkeyJacket.avif";
import fish from "../images/fish.png";
import linkedIn from "../images/linkedin.png";
import github from "../images/github-grey.png";

import '../styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const prefix = "/portfolio-website";

function HomePage()
{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    const navigate = useNavigate();

    const homeRef = useRef(null);
    const projectRef = useRef(null);
    const aboutRef = useRef(null);

    const handleScroll = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    const handleSocialClick = (url) =>
    {
        window.open(url);
    }

    return (
        <div className="HomePage">
            <div id="HomeTop" ref={homeRef}>
                <NavigationBar/>
                <motion.button
                    id="offcanvas-button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleOpen}
                >
                    Open
                </motion.button>
                <h1>Welcome gamers</h1>
            </div>
            <div>
                <Offcanvas id="homepage-offcanvas" show={show} onHide={handleClose} placement="end" scroll="true">
                    <Offcanvas.Header closeButton />
                    <Offcanvas.Body>
                        <motion.div 
                            id="offcanvas-items"
                            initial={{opacity:0, x:150}}
                            animate={{opacity:1, x:0}}
                            transition={{delay: 0.2, duration:0.4, type:"tween"}}    
                        >
                            <motion.button 
                                className="offcanvas-item" 
                                whileHover={{scale:1.3}}
                                whileTap={{scale: 1.0}}
                                onClick={() => handleScroll(homeRef)}
                            >
                                Home
                            </motion.button>
                            <motion.button 
                                className="offcanvas-item" 
                                whileHover={{scale:1.3}}
                                whileTap={{scale: 1.0}}
                                onClick={() => handleScroll(projectRef)}
                            >
                            Projects
                            </motion.button>
                            <motion.button 
                                className="offcanvas-item" 
                                whileHover={{scale:1.3}}
                                whileTap={{scale: 1.0}}
                                onClick={() => handleScroll(aboutRef)}
                            >
                            About Me
                            </motion.button>
                            <div id="socialDiv">
                                <motion.button 
                                    className="socialButton"
                                    whileHover={{scale:1.2}}
                                    whileTap={{scale: 1.0}}
                                    onClick={() => handleSocialClick("https://www.linkedin.com/in/dylan-benson2/")}
                                >
                                    <img className="socialIcon" alt="LinkedIn Icon" src={linkedIn}/>
                                </motion.button>
                                <motion.button 
                                    className="socialButton"
                                    whileHover={{scale:1.3}}
                                    whileTap={{scale: 1.0}}
                                    onClick={() => handleSocialClick("https://github.com/benson-dylan")}
                                >
                                    <img className="socialIcon" alt="Github Icon" src={github}/>
                                </motion.button>
                            </div>
                        </motion.div>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
            <div id="HomeTwo" ref={projectRef}>
                <h1>My Projects</h1>
                <div id="CardHolder">
                    <Card className="HomePageCard"  style={ {backgroundColor: "white"} }>
                        <Card.Img variant="top" src={luffyImg}/>
                        <Card.Body className="cardBody">
                            <Card.Title>Monkey D. Luffy</Card.Title>
                            <Card.Text>
                                Yes. The one piece is real.
                            </Card.Text>
                        </Card.Body>
                        <motion.button
                            id="cardButton" 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate(prefix + "/projects/ellevation")}>
                            Find it now
                        </motion.button>
                    </Card>
                    <Card className="HomePageCard" style={ {backgroundColor: "white"} }>
                        <Card.Img variant="top" src={appleCat}/>
                        <Card.Body className="cardBody">
                            <Card.Title>Apple Cat</Card.Title>
                            <Card.Text>
                                So greedy.
                            </Card.Text>
                        </Card.Body>
                        <motion.button 
                            id="cardButton" 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}>
                            Get your own
                        </motion.button>
                    </Card>
                    <Card className="HomePageCard" >
                        <Card.Img variant="top" src={jacketMonkey}/>
                        <Card.Body className="cardBody">
                            <Card.Title>Fashionable Monkey</Card.Title>
                            <Card.Text>
                                Farming way too much aura.
                            </Card.Text>
                        </Card.Body>
                        <motion.button 
                            id="cardButton"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}>
                            Learn from him
                        </motion.button>
                    </Card>
                </div>
            </div>
            <div id="HomeThree" ref={aboutRef}>
                <h1>About Me</h1>
            </div>
        </div>
    );
}

export default HomePage;