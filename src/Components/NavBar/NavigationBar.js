import React, {useEffect, useState} from 'react';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import './NavigationBar.css';
import {Link} from "react-router-dom";


function NavigationBar() {

    return (
        <div className="empty">
            <Navbar collapseOnSelect className='navColor ps-3 pe-3' expand="lg">
                <Container fluid>
                    <Navbar.Brand><Link to="/"></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link>Home</Nav.Link>
                            <Nav.Link>Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item>Action</NavDropdown.Item>
                                <NavDropdown.Item>
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item>Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavigationBar;