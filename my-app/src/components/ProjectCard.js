import React from "react";
import { useState } from "react";
import * as motion from "motion/react-client";
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";
import ellevationGame from '../images/ellevationgame.png';
import ellevationMenu from '../images/ellevationmenu.png';
import ellevationTitle from '../images/ellevationtitle.png';
import ellevationTown from '../images/ellevationtown.png';

const prefix = "/portfolio-website";

function ProjectCard(props)
{
    const navigate = useNavigate();
    const [openModalID, setOpenModalID] = useState(null);

    const handleClick = (website) => {
        window.open(website, '_blank', 'noopener,noreferrer');
    };

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
                    <Carousel id="Carousel" fade>
                        <Carousel.Item>
                            <img className="CarouselImage" src={ellevationTitle}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="CarouselImage" src={ellevationTown}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="CarouselImage" src={ellevationMenu}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="CarouselImage" src={ellevationGame}/>
                        </Carousel.Item>
                    </Carousel>
                    <p>
                        A new expansion to a pre-existing language learning video game developed in Unity and hosted by CHDR at the University of Central Florida.
                        <br/><br/>
                        Expansion included both the Unity and Web developments.
                        <br/><br/>
                        Web Developments:<br/>
                        - Increased responsiveness of front-end<br/>
                        - Added new functionality for professors to unlink modules (language term sets) from student classes<br/>
                        - Fixed issues with downloading student play session statistics<br/>
                        - Increased readability of session data<br/>
                        - Implemented modal system to displaying game to work in browser on desktop and mobile<br/>
                        <br/>
                        Unity Developments:<br/>
                        - Added new area filled with NPCs, new assets, and a new minigame to play.<br/>
                        - Implemented shop system for players to purchase customizable outfits with in-game currency<br/>
                        - Created new and unique minigame that assisted students in mastering foreign language terms<br/>
                        - Developed a built-in keyboard system to bypass cross-platform foreign keyboard policies<br/>
                        - Fixed various bugs with existing code base<br/>
                        - Adjusted various UI elements to increase visibility and accessibility<br/>
                    </p>
                </Modal.Body>
            </Modal>
            <Modal
                show={openModalID === 1}
                onHide={() => setOpenModalID(null)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                id="ImageProcessorModal"
                className="ProjectModal"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="ProjectModalTitle">
                        Image Processor
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Developed in Java utilizing Java's Executor Service as well as its BufferedImage class to perform basic operations such as Zoom, Resize, Sharpen, Blur, and Edge Detection.<br/> 
                        <br/>
                        The goal of the project was to prove that runtime could be improved overall through the use of concurrent programming.<br/>
                        <br/>
                        Found a significant decrease in runtime for all methods while maintaining operation fidelity.<br/>
                    </p>
                </Modal.Body>
                <button className="ModalButton" onClick={() => {handleClick("https://github.com/benson-dylan/ImageProcessor")}}>View Repository</button>
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
                    <p>
                        Web application developed using MongoDB, Express.js React.js, and Node.js. <br/>
                        Utilized additional services like Figma and Jira for planning, project management, and organization.<br/>
                        Jest utilized for unit testing.<br/>
                        <br/>
                        Reserv is a student reservation application designed to be used by university student run organizations for reserving rooms for meetings, events, etc. We developed functionality to support University side usage such as adding available rooms and editing available times, as well as Organization side usage like browsing/searching rooms, reserving, and managing events (edit/delete).<br/>
                        <br/>
                        Personally responsible for front-end development on the project. Employed a few external react libraries but most UI was developed entirely by our front-end team.<br/>
                    </p>
                </Modal.Body>
                <button className="ModalButton" onClick={() => {handleClick("https://github.com/vidaang/Reserv")}}>View Repository</button>
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
                    <p>
                        Small procedurally generated maze game developed using Python and OpenGL.<br/>
                        <br/>
                        To create this game we utilized PyOpenGL to create our own small game graphics engine to create wall meshes, render them, and map textures. Billboard techniques were employed for all other asset types in the game. We used GLSL to write our vertex and fragment shaders as well as place lights around the map with real time point lighting. Additionally, the player character was given a flashlight for darker moments in the game.<br/>
                    </p>
                </Modal.Body>
            </Modal>
            <Modal
                show={openModalID === 4}
                onHide={() => setOpenModalID(null)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                id="RayTracerModal"
                className="ProjectModal"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="ProjectModalTitle">
                        Simple Ray Tracer
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Simple ray tracer written in C++ designed to produce still images.<br/><br/>
                        Employs various graphics techniques such as:<br/>
                        - Camera <br/>
                        - Sphere and Plane Rendering <br/>
                        - Skybox <br/>
                        - Area lights <br/>
                        - Ambient, Diffuse, and Specular Shading <br/>
                        - Reflections and Refractions <br/>
                        - Random Sampling to create softer lighting and shadows <br/>
                        - Anti-aliasing to reduce jagged edges <br/>
                        - Post-processing bilateral filter to reduce noise created from random sampling <br/>

                    </p>
                </Modal.Body>
                <button className="ModalButton" onClick={() => {handleClick("https://github.com/benson-dylan/simpleraytracer")}}>View Repository</button>
            </Modal>
            <Modal
                show={openModalID === 5}
                onHide={() => setOpenModalID(null)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                id="RayTracerModal"
                className="ProjectModal"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="ProjectModalTitle">
                        Discord Video Compressor
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>

                    </p>
                </Modal.Body>
                <button className="ModalButton" onClick={() => {handleClick("https://github.com/benson-dylan/Discord-Video-Compressor")}}>View Repository</button>
            </Modal>
        </div>
    );
}

export default ProjectCard;