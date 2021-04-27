import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/images/Logo.png";
import Auth from '../../utils/auth';
import Navbar from 'react-bootstrap/Navbar'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';


const Header = () => {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

    return (
        <Navbar bg="warning" expand="lg" sticky="top">
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
                    <Dropdown as={ButtonGroup}>
                        <Button variant="info">Pages</Button>

                        <Dropdown.Toggle split variant="info" id="dropdown-split-basic" />

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/GroceryList">Grocery List</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Family Notes</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    );
};

export default Header;