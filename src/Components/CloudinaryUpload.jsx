import React, { useState } from 'react';
import { uploadImage, convertGoogleDriveToCloudinary } from '../utils/cloudinary';
import CloudinaryDebug from './CloudinaryDebug';
import './Styles/CloudinaryUpload.css';

const CloudinaryUpload = ({ onUploadComplete }) => {
  const [uploading, setUploading] = useState(false);
  const [googleDriveUrl, setGoogleDriveUrl] = useState('');
  const [uploadedUrl, setUploadedUrl] = useState('');
  const [showDebug, setShowDebug] = useState(false);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setUploading(true);
    try {
      const url = await uploadImage(file);
      setUploadedUrl(url);
      onUploadComplete?.(url);
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const handleGoogleDriveUpload = async () => {
    if (!googleDriveUrl) return;

    setUploading(true);
    try {
      const url = await convertGoogleDriveToCloudinary(googleDriveUrl);
      setUploadedUrl(url);
      onUploadComplete?.(url);
    } catch (error) {
      console.error('Conversion failed:', error);
      alert('Failed to convert Google Drive URL. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="cloudinary-upload">
      <h3>Upload Images to Cloudinary</h3>
      
      <button 
        onClick={() => setShowDebug(!showDebug)}
        style={{ 
          marginBottom: '20px',
          padding: '8px 16px',
          background: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        {showDebug ? 'Hide Debug' : 'Show Debug Info'}
      </button>

      {showDebug && <CloudinaryDebug />}
      
      <div className="upload-section">
        <h4>Upload from File</h4>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
          disabled={uploading}
        />
      </div>

      <div className="upload-section">
        <h4>Convert Google Drive URL</h4>
        <input
          type="text"
          placeholder="Paste Google Drive URL here"
          value={googleDriveUrl}
          onChange={(e) => setGoogleDriveUrl(e.target.value)}
          disabled={uploading}
        />
        <button 
          onClick={handleGoogleDriveUpload}
          disabled={uploading || !googleDriveUrl}
          className="btn"
        >
          {uploading ? 'Converting...' : 'Convert to Cloudinary'}
        </button>
      </div>

      {uploadedUrl && (
        <div className="uploaded-url">
          <h4>Uploaded Image URL:</h4>
          <input
            type="text"
            value={uploadedUrl}
            readOnly
            onClick={(e) => e.target.select()}
          />
          <button 
            onClick={() => navigator.clipboard.writeText(uploadedUrl)}
            className="btn"
          >
            Copy URL
          </button>
        </div>
      )}
    </div>
  );
};

export default CloudinaryUpload; 