import React from 'react';
import { useState } from 'react';
import * as motion from "motion/react-client";

import NavigationBar from '../components/navbar';
import ProjectCardList from '../components/ProjectCardList';
import ProjectCard from '../components/ProjectCard';
import "../styles/index.css";

import ellevationThumb from "../images/ellevation-start.png";

const cards = [
    <ProjectCard id="ELLEvationCard" title="ELLEvation" url="/ellevation" bgImg={ellevationThumb} modalId={0}/>,
    <ProjectCard id="ImageProcessorCard" title="Image Processor" url="/nocturne" modalId={1}/>,
    <ProjectCard id="ReservCard" title="Reserv" url="/reserv" modalId={2}/>,
    <ProjectCard id="MazeGameCard"title="Maze Game" url="/maze" modalId={3}/>,
];

function ProjectPage()
{


    return(
        <div id="ProjectPage">
            <NavigationBar/>
            <h1 id="ProjectHeader">My Projects</h1>
            <ProjectCardList cards={cards} />
        </div>
    );
}

export default ProjectPage;