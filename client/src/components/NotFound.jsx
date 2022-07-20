import React from 'react';

import gif from '../assets/gifs/404-not-found.gif'

const NotFound = () => {
    return (
        <div style={{display:'flex',flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <h5>please add a todo</h5>
            <img style={{width:'50%'}} src={gif} alt='404'/>
        </div>
    );
}

export default NotFound;
