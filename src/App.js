import React, { useState } from 'react';
import UploadForm from './components/UploadForm/UploadForm';
import ProgressBar from './components/ProgressBar/ProgressBar';
import Loading from './components/Loading/Loading';
import Results from './components/Results/Results';
import Summary from './components/Summary/Summary';
import './App.css';

function App() {
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] = useState('');
    const [authors, setAuthors] = useState([]);
    const [summaryText, setSummaryText] = useState('');
    const [selectedAuthor, setSelectedAuthor] = useState('');

    const handleUpload = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        setProgress(10);
        setIsLoading(true);

        fetch('/upload', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            setResults(data.results);
            setAuthors(data.authors);
            setProgress(100);
            setIsLoading(false);
        })
        .catch(error => {
            console.error('Error uploading file:', error);
            setProgress(0);
            setIsLoading(false);
        });
    };

    const handleAuthorSelect = (e) => {
        setSelectedAuthor(e.target.value);
    };

    const handleGenerateSummary = () => {
        fetch('/summary', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ author: selectedAuthor }),
        })
        .then(response => response.json())
        .then(data => {
            setSummaryText(data.summary);
        })
        .catch(error => console.error('Error generating summary:', error));
    };

    const handleDownloadCSV = () => {
        window.location.href = '/download';
    };

    const handleBack = () => {
        window.location.href = '/';
    };

    const handleDownloadSummary = () => {
        window.location.href = `/download_summary?author=${encodeURIComponent(selectedAuthor)}`;
    };

    return (
        <div className="app-container">
            <header className="app-header">
                <h1>Welcome to the Research Summary App</h1>
                <p>Your gateway to insightful research summaries and data analysis.</p>
            </header>
            <main className="app-main">
                <UploadForm onUpload={handleUpload} />
                <ProgressBar progress={progress} />
                <Loading isLoading={isLoading} />
                {results && (
                    <Results
                        results={results}
                        authors={authors}
                        onAuthorSelect={handleAuthorSelect}
                        onDownloadCSV={handleDownloadCSV}
                        onBack={handleBack}
                    />
                )}
                {selectedAuthor && (
                    <Summary
                        author={selectedAuthor}
                        summaryText={summaryText}
                        onGenerateSummary={handleGenerateSummary}
                        onDownloadSummary={handleDownloadSummary}
                    />
                )}
            </main>
            <footer className="app-footer">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
