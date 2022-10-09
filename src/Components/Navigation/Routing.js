import { AnimatePresence } from 'framer-motion';
import React from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import LandingPage from "../Landing Page/LandingPage";

function Navigation (){
    const location = useLocation();

    //Server Connections
    const localHost = 'http://localhost:3001';
    const host = localHost;

    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <Routes location={location} key={location.pathname} >
                <Route path='/' element={<LandingPage host={host}/>}/>
                <Route path="*" element={<LandingPage  to="/" replace/>}/>
            </Routes>
        </AnimatePresence>
    )
}

export default Navigation;
