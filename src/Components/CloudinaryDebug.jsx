import React from 'react';

const CloudinaryDebug = () => {
  const envVars = {
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
    apiKey: import.meta.env.VITE_CLOUDINARY_API_KEY,
    apiSecret: import.meta.env.VITE_CLOUDINARY_API_SECRET,
    uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
  };

  const allSet = Object.values(envVars).every(value => value && value !== 'undefined');

  return (
    <div style={{ 
      padding: '20px', 
      background: '#f5f5f5', 
      border: '1px solid #ccc',
      borderRadius: '8px',
      margin: '20px'
    }}>
      <h3>Cloudinary Environment Variables Debug</h3>
      
      <div style={{ marginBottom: '20px' }}>
        <strong>Status:</strong> {allSet ? '✅ All variables set' : '❌ Missing variables'}
      </div>

      <div style={{ fontFamily: 'monospace', fontSize: '12px' }}>
        <div><strong>VITE_CLOUDINARY_CLOUD_NAME:</strong> {envVars.cloudName || '❌ NOT SET'}</div>
        <div><strong>VITE_CLOUDINARY_API_KEY:</strong> {envVars.apiKey || '❌ NOT SET'}</div>
        <div><strong>VITE_CLOUDINARY_API_SECRET:</strong> {envVars.apiSecret ? '***SET***' : '❌ NOT SET'}</div>
        <div><strong>VITE_CLOUDINARY_UPLOAD_PRESET:</strong> {envVars.uploadPreset || '❌ NOT SET'}</div>
      </div>

      {!allSet && (
        <div style={{ 
          marginTop: '20px', 
          padding: '15px', 
          background: '#fff3cd', 
          border: '1px solid #ffeaa7',
          borderRadius: '4px'
        }}>
          <h4>To fix this:</h4>
          <ol>
            <li>Create a <code>.env</code> file in your project root</li>
            <li>Add your Cloudinary credentials:</li>
            <pre style={{ background: '#f8f9fa', padding: '10px', borderRadius: '4px' }}>
{`VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_CLOUDINARY_API_KEY=your_api_key
VITE_CLOUDINARY_API_SECRET=your_api_secret
VITE_CLOUDINARY_UPLOAD_PRESET=your_upload_preset`}
            </pre>
            <li>Restart your development server</li>
          </ol>
        </div>
      )}
    </div>
  );
};

export default CloudinaryDebug; 