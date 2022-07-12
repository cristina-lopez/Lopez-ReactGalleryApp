import React from 'react';
import { Redirect } from 'react-router-dom';
//import {Route, Redirect} from 'react-router-dom';

const NotFound = () => {
    return (
            <li className="not-found">
                <h3>No Results Found</h3>
                <p>Your search did not return any results. Please try again.</p>
            </li>

    );
}

export default NotFound;