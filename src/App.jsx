import React ,{useState , useEffect , useMemo } from "react";
import './App.css'
import { Routes, Route, Link } from 'react-router-dom';

import Maintenance from './Pages/Maintenance';

// Commented out during maintenance
// import Navbar from './Components/Navbar'
// import Home from './Pages/Home'
// import About from './Pages/About'
// import Skills from "./Pages/Skills";
// import Projects from "./Pages/Projects";
// import Experience from "./Pages/Experience";
// import Education from "./Pages/Education";
// import Contact from "./Pages/Contact";
// import Footer from "./Components/Footer";
// import ProjectDetail from './Pages/ProjectDetail';
// import ExperienceDetail from './Pages/ExperienceDetail';

// function NotFound() {
//   return (
//     <section className="not-found" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
//       <h2 className="heading"><i className="fas fa-exclamation-triangle"></i> 404 <span>Not Found</span></h2>
//       <p style={{ fontSize: '1.5rem', margin: '1.5rem 0' }}>Sorry, the page you are looking for does not exist.</p>
//       <Link to="/" className="btn" style={{ fontSize: '1.2rem', padding: '1rem 2.2rem', borderRadius: '0.5rem', marginTop: '1rem' }}>
//         Go to Home
//       </Link>
//     </section>
//   );
// }

function App() {
  // Theme state
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  useEffect(() => {
    document.body.classList.toggle('dark-theme', theme === 'dark');
  }, [theme]);

  // MAINTENANCE MODE: All routes disabled
  return (
    <div className="app-wrapper">
      <Routes>
        <Route path="*" element={<Maintenance />} />
      </Routes>
    </div>
  )

  // ORIGINAL ROUTES (Uncomment when maintenance is over)
  // return (
  //   <div className="app-wrapper">
  //     <Navbar theme={theme} toggleTheme={toggleTheme} />
  //     <Routes>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/about" element={<About />} />
  //       <Route path="/skills" element={<Skills />} />
  //       <Route path="/experience" element={<Experience />} />
  //       <Route path="/experience/:slug" element={<ExperienceDetail />} />
  //       <Route path="/projects" element={<Projects />} />
  //       <Route path="/projects/:slug" element={<ProjectDetail />} />
  //       <Route path="/education" element={<Education />} />
  //       <Route path="/contact" element={<Contact />} />
  //       <Route path="*" element={<NotFound />} />
  //     </Routes>
  //     <Footer/>
  //   </div>
  // )
}

export default App
