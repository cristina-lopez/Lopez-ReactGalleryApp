import React from 'react';

const NotFound = () => {
    return (
        <div className="photo-container">
            <h2> Results </h2>
            <ul>
                <li className="not-found">
                    <h3>404-Route Not Found</h3>
                    <p>Please try again.</p>
                </li>
            </ul>
        </div>
    );
}

export default NotFound;