import React from "react";
import * as motion from "motion/react-client";
import { useNavigate } from "react-router-dom";

const prefix = "/portfolio-website";



function ProjectCard(props)
{
    const navigate = useNavigate();

    return(
        <div className="CardContainer" style={{backgroundImage: `url(${props.bgImg})`}}>
            <div id="CardHeaderContainer">
                <h1>{props.title}</h1>
            </div>
            <p></p>
            <div id="CardButtonContainer">
                <button className="CardButton" onClick={() => navigate(prefix + props.url)}>Learn More</button>
            </div>
        </div>
    );
}

export default ProjectCard;