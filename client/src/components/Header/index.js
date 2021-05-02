import React from 'react';
// import { Link } from 'react-router-dom';
import Logo from "../../assets/images/Logo-2.png";
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
        // <Navbar bg="warning" expand="lg" sticky="top">
        <Navbar.Brand href="/">
            <img
                src={Logo}
                width="200"
                height="140"
                className="d-inline-block align-top"
                alt="SimpliFam logo"
            />
        </Navbar.Brand>
    );
};

export default Header;