import React from 'react';
import './UploadForm.css';

function UploadForm({ onUpload }) {
    return (
        <form onSubmit={onUpload} encType="multipart/form-data" className="upload-form">
            <label className="label-file-input">
                Choose File
                <input type="file" name="file" accept=".csv" required />
            </label>
            <button type="submit" className="upload-button">Upload</button>
        </form>
    );
}

export default UploadForm;
