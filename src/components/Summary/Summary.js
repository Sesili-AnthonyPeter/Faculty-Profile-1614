import React from 'react';
import './Summary.css';

function Summary({ author, summaryText, onDownloadSummary }) {
    return (
        <div className="summary">
            <h2>Author Summary for {author}</h2>
            <div className="summary-text">
                {summaryText.split('. ').map((sentence, index) => (
                    <p key={index}>{sentence}.</p>
                ))}
            </div>
            <button onClick={onDownloadSummary}>Download Summary</button>
        </div>
    );
}

export default Summary;
