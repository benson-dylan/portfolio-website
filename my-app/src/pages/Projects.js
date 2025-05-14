import React from 'react';
import { Button } from 'react-bootstrap';

import NavigationBar from '../components/navbar';
import ProjectCard from '../components/ProjectCard';

import catImg from "../images/applecat.jpg";

function ProjectPage()
{
    return(
        <div id="ProjectPage">
            <NavigationBar/>
            <div id="ProjectCards">
                <button className="ArrowButton"></button>
                <ProjectCard id="ELLEvationCard" title="ELLEvation" url="/ellevation" bgImg={catImg} button="Go Now!"/>
                <ProjectCard id="MazeGameCard"title="Maze Game" url="/maze"/>
                <ProjectCard id="NocturneCard" title="Project Nocturne" url="/nocturne"/>
                <ProjectCard id="ReservCard" title="Reserv" url="/reserv"/>
                <button className="ArrowButton"></button>
            </div>
        </div>
    );
}

export default ProjectPage;