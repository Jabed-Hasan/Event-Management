import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Navbar/Navbar';
import Login from '../pages/Login/Login';


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
       
            <Outlet></Outlet>
        </div>
    );
};

export default Root;