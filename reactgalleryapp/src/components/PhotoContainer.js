import React from 'react';
import Photo from './Photo'

// needs to be stateful // photos needs to be in state
const PhotoContainer =(props) => {

    let photos = props.data.map((photo) => {
        <Photo url={photo.url} key={photo.id} />
    });
    
    return (
        <h2> Results </h2>,
        <ul>
            {photos}
        </ul>
    );
}

export default PhotoContainer;