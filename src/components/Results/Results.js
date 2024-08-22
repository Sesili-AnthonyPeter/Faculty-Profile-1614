import React from 'react';
import './Results.css';

function Results({ results, authors, onAuthorSelect, onDownloadCSV, onBack }) {
    return (
        <div className="results">
            <h2>Results</h2>
            <div dangerouslySetInnerHTML={{ __html: results }} />
            <select onChange={onAuthorSelect}>
                <option value="">Select Author</option>
                {authors.map((author, index) => (
                    <option key={index} value={author}>{author}</option>
                ))}
            </select>
            <button onClick={onDownloadCSV}>Download CSV</button>
            <button onClick={onBack}>Back</button>
        </div>
    );
}

export default Results;
