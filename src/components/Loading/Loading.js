import React from 'react';
import './Loading.css';

function Loading({ isLoading }) {
    return (
        <div className="loading" style={{ display: isLoading ? 'block' : 'none' }}>
            <div className="loader"></div>
            <p>Loading results...</p>
        </div>
    );
}

export default Loading;
