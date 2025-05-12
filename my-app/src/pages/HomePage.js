import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as motion from "motion/react-client";

import NavigationBar from '../components/navbar';

import '../styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import profile from '../images/luffypfp.jpg';

const prefix = "/portfolio-website";

function HomePage()
{
    const navigate = useNavigate();

    return (
        <div className="HomePage">
            <div id="HomeTop">
                <NavigationBar/>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                    id="HomePageContents"
                >
                    <div id="HomeLeft">
                        <div id="HomeLeftContainer">
                            <img src={profile} id="HomePageImg"/>
                            <span id="HomePageCaption">My name is Dylan Benson, a software developer with a <br/> passion for web development and video games</span>
                            <motion.button 
                                id="AboutButton"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={() => navigate(prefix + "/about")}
                            >Get to know me!</motion.button>
                        </div>
                    </div>
                    <div id="HomeRight">
                        <div className="HomeRightContainer">
                            <h1>TOP</h1>
                        </div>
                        <div className="HomeRightContainer">
                            <h1>BOTTOM</h1>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default HomePage;