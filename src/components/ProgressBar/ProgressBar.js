import React from 'react';
import './ProgressBar.css';

function ProgressBar({ progress }) {
    return (
        <div className="progress-wrapper" style={{ display: progress > 0 ? 'block' : 'none' }}>
            <div className="progress">
                <div className="progress-bar" style={{ width: `${progress}%` }}>
                    {progress === 100 ? 'Processing...' : ''}
                </div>
            </div>
        </div>
    );
}

export default ProgressBar;
