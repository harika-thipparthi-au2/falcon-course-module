import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);

        // No internal state, but bind 'this' to class methods
    }

    render() {
        return <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
            <NavLink className="navbar-brand mb-0 h1" to="/">myTube</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName='active' to="/search">Search</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName='active' to="/profile">Profile</NavLink>
                    </li>
                </ul>
                <button className="btn btn-outline-light ml-auto">Logout</button>
            </div>
        </nav>

    }
}

export default Header;