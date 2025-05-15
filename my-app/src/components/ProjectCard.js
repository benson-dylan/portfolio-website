import React from "react";
import { useState } from "react";
import * as motion from "motion/react-client";
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";

const prefix = "/portfolio-website";



function ProjectCard(props)
{
    const navigate = useNavigate();
    const [openModalID, setOpenModalID] = useState(null);

    return(
        <div className="CardContainer" style={{backgroundImage: `url(${props.bgImg})`}}>
            <div id="CardHeaderContainer">
                <h1>{props.title}</h1>
            </div>
            <p></p>
            <div id="CardButtonContainer">
                <motion.button 
                    className="CardButton" 
                    onClick={() => setOpenModalID(props.modalId)}
                >Learn More</motion.button>
            </div>
            <Modal
                show={openModalID === 0}
                onHide={() => setOpenModalID(null)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                id="EllevationModal"
                className="ProjectModal"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="ProjectModalTitle">
                        AnimELLE Crossing: ELLEvation
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Carousel fade>
                        <Carousel.Item>
                            <img src={props.bgImg}></img>
                        </Carousel.Item>
                    </Carousel>
                </Modal.Body>
            </Modal>
            <Modal
                show={openModalID === 1}
                onHide={() => setOpenModalID(null)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                id="NocturneModal"
                className="ProjectModal"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="ProjectModalTitle">
                        Project Nocturne
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Example</p>
                </Modal.Body>
            </Modal>
            <Modal
                show={openModalID === 2}
                onHide={() => setOpenModalID(null)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                id="ReservModal"
                className="ProjectModal"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="ProjectModalTitle">
                        Reserv
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                </Modal.Body>
            </Modal>
            <Modal
                show={openModalID === 3}
                onHide={() => setOpenModalID(null)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                id="MazeModal"
                className="ProjectModal"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="ProjectModalTitle">
                        Maze Game
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Example</p>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default ProjectCard;