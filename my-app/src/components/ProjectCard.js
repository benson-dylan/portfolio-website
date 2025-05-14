import React from "react";
import * as motion from "motion/react-client";

const prefix = "/portfolio-website";

function ProjectCard(props)
{
    return(
        <div className="CardContainer" style={{backgroundImage: `url(${props.bgImg})`}}>
            <h1>{props.title}</h1>
            <p></p>
            <button className="CardButton" onClick={() => alert(prefix + props.url)}>{props.button}</button>
        </div>
    );
}

export default ProjectCard;