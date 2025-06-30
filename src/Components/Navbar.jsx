import React, { useEffect, useState } from 'react'
import "./Styles/Navbar.css"
import { Link, useLocation } from 'react-router-dom'

export default function Navbar({ theme, toggleTheme }) {

  const [activePage , setActivePage ] = useState("home");
  const [showIcon , setShowIcon ] = useState(true);
  const location = useLocation();

  return (
    <div className='header'>

      <Link to="/" className="logo" onClick={()=>setActivePage("home")} ><i className="fab fa-node-js"></i> Aman</Link>

      <div id="menu" onClick={()=> {setShowIcon(!showIcon)}} className={showIcon ? "fas fa-bars" : "fa-times"} ></div>

      <nav className={ showIcon ? "navbar" : "navbar nav-toggle"}>
        <ul onClick={()=> {setShowIcon(!showIcon)}}  >
          <li><Link to="/" className={location.pathname === '/' ? "active" : ""}> Home </Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? "active" : ""}> About </Link></li>
          <li><Link to="/skills" className={location.pathname === '/skills' ? "active" : ""}> Skills </Link></li>
          <li><Link to="/experience" className={location.pathname.startsWith('/experience') ? "active" : ""}> Experience </Link></li>
          <li><Link to="/projects" className={location.pathname.startsWith('/projects') ? "active" : ""}> Projects </Link></li>
          <li><Link to="/education" className={location.pathname === '/education' ? "active" : ""}> Education </Link></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? "active" : ""}> Contact </Link></li>
        </ul>  
      </nav>
      <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle theme" style={{marginLeft: '1rem', fontSize: '2rem', background: 'none', border: 'none', cursor: 'pointer'}}>
        {theme === 'light' ? <i className="fas fa-moon"></i> : <i className="fas fa-sun"></i>}
      </button>
    </div>
  )
} 
