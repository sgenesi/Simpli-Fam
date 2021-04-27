import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/images/Logo.png";
import Auth from '../../utils/auth';
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Header = () => {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

    return (
        <Navbar bg="#FFB703" expand="lg">
            <Navbar.Brand href="#home">
                <img
                    src={Logo}
                    width="150"
                    height="120"
                    className="d-inline-block align-top"
                    alt="SimpliFam logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Pages" id="basic-nav-dropdown" src="https://img.icons8.com/cotton/64/000000/menu.png"
                        alt="Complete">
                        <NavDropdown.Item href="#action/3.1">Grocery List</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Family Notes</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    );
};

export default Header;