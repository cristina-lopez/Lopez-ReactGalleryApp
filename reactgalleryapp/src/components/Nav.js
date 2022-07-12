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

    render() {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink exact to="/search/cats" onClick={this.handleClick}>Cats</NavLink></li>
                <li><NavLink to='/search/minions' onClick={this.handleClick}>Minions</NavLink></li>
                <li><NavLink to='/search/games' onClick={this.handleClick}>Games</NavLink></li>
            </ul>
        </nav>
    );
}
}

export default withRouter(Nav);