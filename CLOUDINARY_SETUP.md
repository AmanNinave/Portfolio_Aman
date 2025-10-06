# Cloudinary Setup Guide

## Step 1: Create Cloudinary Account

1. Go to [Cloudinary.com](https://cloudinary.com)
2. Sign up for a free account
3. Get your credentials from the dashboard:
   - Cloud Name
   - API Key
   - API Secret

## Step 2: Set up Upload Preset

1. Go to your Cloudinary Dashboard
2. Navigate to Settings > Upload
3. Scroll down to "Upload presets"
4. Click "Add upload preset"
5. Set the following:
   - **Preset name**: `portfolio_uploads` (or any name you prefer)
   - **Signing Mode**: `Unsigned`
   - **Folder**: `portfolio` (optional)
6. Save the preset

## Step 3: Create Environment Variables

Create a `.env` file in your project root:

```env
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_CLOUDINARY_API_KEY=your_api_key
VITE_CLOUDINARY_API_SECRET=your_api_secret
VITE_CLOUDINARY_UPLOAD_PRESET=portfolio_uploads
```

**Important:** In Vite, environment variables must be prefixed with `VITE_` to be accessible in the browser.

## Step 4: Update Your JSON Configuration

Update your `src/Pages/Config/Experiance.json` to include Cloudinary URLs:

```json
{
  "performance": {
    "title": "Performance Metrics",
    "links": [
      {
        "title": "Performance",
        "link": "https://drive.google.com/file/d/1ne8ks4gHLBUZt1KzxX5cBWIv7rQ7_etb/view",
        "cloudinaryUrl": "https://res.cloudinary.com/your-cloud-name/image/upload/v1234567890/portfolio/performance1.jpg"
      }
    ]
  }
}
```

## Step 5: Upload Your Images

### Option A: Use the Upload Component

1. Add the CloudinaryUpload component to your app temporarily
2. Use it to upload your images
3. Copy the generated URLs to your JSON file

### Option B: Manual Upload

1. Go to your Cloudinary Dashboard
2. Click "Upload" in the top menu
3. Upload your performance images
4. Copy the URLs and add them to your JSON

### Option C: Convert Google Drive URLs

1. Use the CloudinaryUpload component
2. Paste your Google Drive URLs
3. Click "Convert to Cloudinary"
4. Copy the generated URLs

## Step 6: Test Your Setup

1. Start your development server: `npm run dev`
2. Navigate to an experience detail page
3. Verify that images load properly from Cloudinary

## Benefits of Using Cloudinary

- ✅ **Fast loading** - CDN optimized
- ✅ **Automatic optimization** - Images are optimized automatically
- ✅ **Responsive images** - Different sizes for different devices
- ✅ **No redirects** - Direct image URLs
- ✅ **Reliable** - 99.9% uptime
- ✅ **Free tier** - 25GB storage, 25GB bandwidth per month

## Troubleshooting

### Images not loading
- Check your environment variables (must start with `VITE_`)
- Verify the Cloudinary URLs are correct
- Check browser console for errors

### Upload failing
- Verify your upload preset is set to "Unsigned"
- Check your API credentials
- Ensure the file is an image format

### CORS issues
- Make sure you're using the correct Cloudinary domain
- Check that your upload preset allows unsigned uploads

### Environment variables not working
- Make sure all environment variables start with `VITE_`
- Restart your development server after adding environment variables
- Check that the `.env` file is in the project root

## Security Notes

- Never commit your `.env` file to version control
- Use unsigned uploads for client-side uploads
- Consider using signed uploads for server-side operations
- Set up proper CORS settings in your Cloudinary account 