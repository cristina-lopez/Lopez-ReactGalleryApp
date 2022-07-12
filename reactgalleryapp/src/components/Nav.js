import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
    constructor() {
        super();
        this.state = {
            button: ''
        };
    }

    handleClick = (e) => {
        let buttonClicked = e.target.innerText.toLowerCase();
        this.props.onClick(buttonClicked);
        this.setState({button: buttonClicked});
    }

    render() {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to="/cats" onClick={this.handleClick}>Cats</NavLink></li>
                <li><NavLink to='/minions' onClick={this.handleClick}>Minions</NavLink></li>
                <li><NavLink to='/games' onClick={this.handleClick}>Games</NavLink></li>
            </ul>
        </nav>
    );
}
}

export default withRouter(Nav);