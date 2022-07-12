import React from 'react';
//import { Redirect } from 'react-router-dom';
//import {Route, Redirect} from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="photo-container">
            <h2> Results </h2>
            <ul>
                <li className="not-found">
                    <h3>No Results Found</h3>
                    <p>Your search did not return any results. Please try again.</p>
                </li>
            </ul>
        </div>
    );
}

export default NotFound;