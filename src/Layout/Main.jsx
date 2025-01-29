import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Shared/NavBar/NavBar';
import About from '../pages/About/About';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <About></About>
        </div>
    );
};

export default Main;