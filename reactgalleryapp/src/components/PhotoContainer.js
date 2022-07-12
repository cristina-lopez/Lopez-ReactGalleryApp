import React from 'react';
import Photo from './Photo'
import NotFound from './NotFound';
import { Redirect, Route } from 'react-router-dom';

const PhotoContainer =(props) => {

    const results = props.data;
    let photos;

    if (results.length > 0) {
        photos = results.map((photo) => {
            let url = `http://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
            return (
                <Photo url={url} key={photo.id} />
            );
        });
    } else {
        return (
            <Route exact path="/notfound" render={() => 
                <Redirect to="/notfound" />}
            />
        );
    }
    
    return (
        <div className="photo-container">
            <h2> Results </h2>
            <ul>
                {photos} 
            </ul>
        </div>
    );
}

export default PhotoContainer;