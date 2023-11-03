import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './component-style.css'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function NavBar() {




    return (
        <Router>
            <Navbar expand="lg" >
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="navbar-brand" as={Link} to="/about-me/"><b>Portfolio Site</b> <p>Miernik Adrian2</p></Nav.Link>
                            <Nav.Link className="main-link" as={Link} to="/temp">Temp</Nav.Link>
                            <Nav.Link className="main-link" as={Link} to="/temp">Temp</Nav.Link>

                        </Nav>


                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Routes>

            </Routes>
        </Router>
    );
}

export default NavBar;
