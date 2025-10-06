// Browser-compatible Cloudinary utilities (no Node.js dependencies)

// Function to upload image to Cloudinary
export const uploadImage = async (file) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error(`Upload failed: ${response.statusText}`);
    }

    const data = await response.json();
    return data.secure_url;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};

// Function to get optimized image URL
export const getOptimizedImageUrl = (publicId, options = {}) => {
  const defaultOptions = {
    width: 800,
    height: 600,
    crop: 'fill',
    quality: 'auto',
    format: 'auto',
  };

  const finalOptions = { ...defaultOptions, ...options };
  
  // Build URL manually instead of using SDK
  const baseUrl = `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`;
  const transformations = Object.entries(finalOptions)
    .map(([key, value]) => `${key}_${value}`)
    .join(',');
  
  return `${baseUrl}/${transformations}/${publicId}`;
};

// Function to convert Google Drive URL to Cloudinary URL
export const convertGoogleDriveToCloudinary = async (googleDriveUrl) => {
  try {
    // Extract file ID from Google Drive URL
    const fileId = googleDriveUrl.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1];
    if (!fileId) {
      throw new Error('Invalid Google Drive URL');
    }

    // Create a direct download URL
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    
    // Upload to Cloudinary using URL
    const formData = new FormData();
    formData.append('file', downloadUrl);
    formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error(`Conversion failed: ${response.statusText}`);
    }

    const data = await response.json();
    return data.secure_url;
  } catch (error) {
    console.error('Error converting Google Drive to Cloudinary:', error);
    throw error;
  }
};

// Function to create Cloudinary URL with transformations
export const createCloudinaryUrl = (publicId, transformations = {}) => {
  const baseUrl = `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`;
  
  if (Object.keys(transformations).length === 0) {
    return `${baseUrl}/${publicId}`;
  }
  
  const transformString = Object.entries(transformations)
    .map(([key, value]) => `${key}_${value}`)
    .join(',');
  
  return `${baseUrl}/${transformString}/${publicId}`;
}; 