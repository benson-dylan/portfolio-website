import React from 'react';
import { useState } from 'react';
import * as motion from "motion/react-client";

import NavigationBar from '../components/navbar';
import ProjectCardList from '../components/ProjectCardList';
import ProjectCard from '../components/ProjectCard';
import "../styles/index.css";

import ellevationThumb from "../images/ellevation-start.png";
import raytracerThumb from "../images/raytracer.png";
import compressorThumb from "../images/videocomp.png";
import reservThumb from '../images/reservlogo.png';
import imgprocThumb from '../images/javalogo.png';

const cards = [
    <ProjectCard id="ELLEvationCard" title="ELLEvation" url="/ellevation" bgImg={ellevationThumb} modalId={0}/>,
    <ProjectCard id="ImageProcessorCard" title="Image Processor" url="/imageprocessor" bgImg={imgprocThumb} modalId={1}/>,
    <ProjectCard id="ReservCard" title="Reserv" url="/reserv" bgImg={reservThumb} modalId={2}/>,
    <ProjectCard id="RayTracerCard"title="Simple Ray Tracer" url="/raytracer" bgImg={raytracerThumb} modalId={4}/>,
    <ProjectCard id="MazeGameCard"title="Maze Game" url="/maze" modalId={3}/>,
    <ProjectCard id="VideoCompressorCard"title="Video Compressor" bgImg={compressorThumb} modalId={5}/>,
    <ProjectCard id="ProjectNocturneCard"title="Project Nocturne" modalId={6}/>,
];

function ProjectPage()
{
    const [index, setIndex] = useState(0);

    const changeIndex = (amount) =>
    {
        if (index == 0 && amount < 0)
        {
            setIndex(cards.length - 1);
        }
        else if (index == cards.length - 1 && amount > 0)
        {
            setIndex(0);
        }
        else
        {
            setIndex(index + amount);
        }
    }

    return(
        <div id="ProjectPage">
            <NavigationBar/>
            <h1 id="ProjectHeader">My Projects</h1>
            <div id="ProjectCards">
                <button className="ProjectListButton" id="left" onClick={() => {changeIndex(-1)}}>&lt;</button>
                <ProjectCardList cards={cards} startIdx={index} />
                <button className="ProjectListButton" id="right" onClick={() => {changeIndex(1)}}>&gt;</button>
            </div>
        </div>
    );
}

export default ProjectPage;