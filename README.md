# Portfolio - Aman Ninave

A modern, responsive portfolio website built with React, Vite, and React Router.

## Features

- 🎨 Modern and responsive design
- 🌙 Dark/Light theme toggle
- 📱 Mobile-friendly interface
- ⚡ Fast loading with Vite
- 🎯 SEO optimized
- 📧 Contact form integration
- 🎭 Smooth animations with Framer Motion

## Tech Stack

- **Frontend**: React 18, Vite
- **Routing**: React Router DOM
- **Styling**: CSS3 with custom animations
- **Animations**: Framer Motion, tsparticles
- **Deployment**: Netlify

## Getting Started

### Prerequisites

- Node.js (>= 20.0.0)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Portfolio_Aman
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Deployment

This project is configured for deployment on Netlify with proper SPA routing support.

### Netlify Configuration

The project includes:
- `netlify.toml` - Build configuration and redirects
- `public/_redirects` - SPA routing redirects
- `deploy.sh` - Deployment helper script

### Fix for 404 Errors on Page Refresh

The 404 errors on page refresh have been fixed by:

1. **Updated `netlify.toml`** with proper redirect rules:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

2. **Updated `public/_redirects`** file:
```
/*    /index.html   200
```

3. **Enhanced Vite configuration** to ensure proper build output.

### Deployment Steps

1. Build the project:
```bash
npm run build
```

2. Deploy to Netlify:
   - Connect your repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Deploy!

## Project Structure

```
Portfolio_Aman/
├── src/
│   ├── Components/     # Reusable components
│   ├── Pages/         # Page components
│   │   ├── Config/    # JSON configuration files
│   │   └── Styles/    # Page-specific styles
│   └── assets/        # Static assets
├── public/            # Public assets and Netlify config
└── dist/             # Build output
```

## Pages

- **Home** (`/`) - Landing page with hero section
- **About** (`/about`) - Personal information
- **Skills** (`/skills`) - Technical skills showcase
- **Experience** (`/experience`) - Work experience
- **Projects** (`/projects`) - Portfolio projects
- **Education** (`/education`) - Educational background
- **Contact** (`/contact`) - Contact form

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).
