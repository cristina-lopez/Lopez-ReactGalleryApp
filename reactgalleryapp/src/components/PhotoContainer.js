import React from 'react';
import Photo from './Photo'
import NoSearchResults from './NoSearchResults';

const PhotoContainer = (props) => {

    const results = props.data;
    let photos;

    if (results.length > 0) {
        photos = results.map((photo) => {
            let url = `http://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
            return (
                <Photo url={url} key={photo.id} />
            );
        });
    } else if (props.loading) {
        return (
            <p> Loading... </p>
        );
    } else {
        return (
            <NoSearchResults />
        );
    }
    
    return (
        
        <div className="photo-container">
            <h2> Results for: {props.topic}</h2>
            <ul>
                {photos} 
            </ul>
        </div>
    );
}

export default PhotoContainer;