import React, { PropTypes } from 'react';
import "./Navbar.css";

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#top"></a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><a href="#calendar">Family Calendar</a></li>
                        <li><a href="#grocery">Grocery List</a></li>
                        {/* <li><a href="#notes">Notes</a></li> */}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;