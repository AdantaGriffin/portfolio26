import React from 'react';
import { Outlet } from 'react-router-dom';

import Hero from '../Hero/hero';
import About from '../About/about';
import Projects from '../Projects/projects';
import Skills from '../Skills/skills';
import Contact from '../Contact/contact';
import Footer from '../Footer/footer';

function Root(){
    return(
        <>
            <Hero/>
            <About/>
            <Projects/>
            <Skills/>
            <Contact/>
            <Footer/>
        </>
    )
};

export default Root;