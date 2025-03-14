import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Card from 'react-bootstrap/Card';
import * as motion from "motion/react-client";

import luffyImg from "../images/luffypfp.jpg";
import appleCat from "../images/applecat.jpg";
import jacketMonkey from "../images/monkeyJacket.avif";

import '../styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const prefix = "/portfolio-website";

function HomePage()
{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    const navigate = useNavigate();

    return (
        <div className="HomePage">
            <div id="HomeTop">
                <motion.button
                    id="offcanvas-button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onHoverStart={() => console.log('hover started!')}
                    onClick={handleOpen}
                >
                    Open
                </motion.button>
                <Offcanvas id="homepage-offcanvas" show={show} onHide={handleClose} placement="end" scroll="true">
                    <Offcanvas.Header closeButton />
                    <Offcanvas.Body>
                        Placeholder YAY!!!
                    </Offcanvas.Body>
                </Offcanvas>
                <h1>Welcome gamers</h1>
            </div>
            <div id="HomeTwo">
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
                            onClick={() => navigate(prefix + "/ELLEvation")}>
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
        </div>
    );
}

export default HomePage;