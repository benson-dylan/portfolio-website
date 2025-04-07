import React from 'react';
import { Button } from 'react-bootstrap';

import NavigationBar from '../components/navbar';

function ProjectPage()
{
    return(
        <div id="ProjectPage">
            <NavigationBar/>
            <h1>Project</h1>
            <Button href="/portfolio-website/projects/ellevation">ELLEvation</Button>
        </div>
    );
}

export default ProjectPage;