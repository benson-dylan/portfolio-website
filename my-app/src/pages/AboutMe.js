import React from "react";
import * as motion from "motion/react-client";

import NavigationBar from "../components/navbar";
import '../styles/index.css';

import aboutImg from "../images/dylangradhead.jpg";

function AboutPage()
{
    return(
        <div id="AboutPage">
            <NavigationBar/>
            <motion.div 
                id="AboutContent"
                initial={{ opacity: 0, y: -200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
            >
                <div id="AboutLeft">
                    <h1>About Me</h1>
                    <p>
                        &emsp;&emsp;My name is Dylan Benson, an aspiring web and game developer 
                        born and raised in Central Florida. Growing up, I always had
                        a passion to make things, taking up graphic design, music, and traditional art. 
                        But over time, I set my creativity aside to focus on academics and the future.
                    </p>
                    <p>
                        &emsp;&emsp;Throughout my time at the University of Central Florida, where I graduated with a B.S. in Computer Science in 2025, I decided
                        to combine my affinity for math, science, and technology with my love for
                        art, design, stories, and experiences.
                    </p>
                    <p>
                        &emsp;&emsp;The culmination of these subjects has led me to find passion in web development
                        and game design, where today I spend my time refining my skills, learning new things,
                        and striving to create inspiring and innovative experiences to make life better for as many people
                        as possible.
                    </p>
                </div>
                <div id="AboutRight">
                    <img id="AboutImg" src={aboutImg}/>
                </div>
            </motion.div>
        </div>
    );
}

export default AboutPage;