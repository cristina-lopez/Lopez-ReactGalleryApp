import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink exact to="/cats">Cats</NavLink></li>
                <li><NavLink to='/minions'>Minions</NavLink></li>
                <li><NavLink to='/games'>Games</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;