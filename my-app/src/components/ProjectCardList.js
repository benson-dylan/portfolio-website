import React from "react";
import * as motion from "motion/react-client";
import "../styles/index.css";

import ProjectCard from "./ProjectCard";

const itemVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { 
        opacity: 1, y: 0,
        transition: {
            duration: 0.25
        }
    },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

function ProjectCardList({ cards })
{
    return (
        <motion.ul id="ProjectCards" variants={containerVariants} initial="hidden" animate="visible">
            {cards.map((card, index) => (
                <motion.li className="CardListItem" key={index} variants={itemVariants}>
                    {card}
                </motion.li>
            ))}
        </motion.ul>
    );
}

export default ProjectCardList;