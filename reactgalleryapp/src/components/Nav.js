import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
    // onclick function, use performSearch
    // props.onClick 
    constructor() {
        super();
        this.state = {
            button: ''
        };
    }

    handleClick = (e) => {
        let buttonClicked = e.target.innerText.toLowerCase();
        console.log(buttonClicked);
        this.props.onClick(buttonClicked);
        this.setState({button: buttonClicked});
        this.props.history.push(`/search/${buttonClicked}`);
    }
    // onClick={this.handleClick}
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