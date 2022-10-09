import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Row} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import './LandingPage.css';


function LandingPage (props) {

    const server = props.host;

    return (
        <motion.div className="container-fluid" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, transition: {duration: 0.2}}}>
        </motion.div>
    )
}

export default LandingPage;