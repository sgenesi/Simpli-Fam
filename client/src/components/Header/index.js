import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/images/Logo.png";
import Auth from '../../utils/auth';

const Header = () => {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

    return (
        <header className="mb-4 py-2 flex-row align-center">
            <div className="container flex-row justify-space-between-lg justify-center align-center">

                <img src={Logo} className="my-1" style={{ width: "15%" }} alt="logo" />


                <nav className="text-center">
                    {Auth.loggedIn() ? (
                        <>
                            <Link to="/calendar">Calendar</Link>
                            <Link to="/item">"Grocery List</Link>
                            <a href="/" onClick={logout}>
                                Logout
                            </a>
                        </>
                    ) : (
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Signup</Link>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;