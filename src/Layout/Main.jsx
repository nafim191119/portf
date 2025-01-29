import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Shared/NavBar/NavBar';
import About from '../pages/About/About';
import Education from '../pages/Education/Education';
import SkillAndExpertise from '../pages/SkillAndExpertise/SkillAndExpertise';
import Projects from '../pages/Projects/Projects';
import Experience from '../pages/Experience/Experience';
import Contact from '../pages/Contact/Contact';
// import Article from '../pages/Article/Article';


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <About></About>
            <Education></Education>
            <SkillAndExpertise></SkillAndExpertise>
            <Projects></Projects>
            <Experience></Experience>
            {/* <Article></Article> */}
            <Contact></Contact>
        </div>
    );
};

export default Main;