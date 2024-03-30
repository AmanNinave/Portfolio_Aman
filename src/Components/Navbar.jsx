import React, { useState } from 'react'
import "./Styles/Navbar.css"

export default function Navbar() {

  const [activePage , setActivePage ] = useState("home");

  return (
    <div className='header'>


      <a href="#home"><span className="logo" onClick={()=>setActivePage("home")} ><i className="fab fa-node-js"></i> Aman</span></a>

      <div id="menu" className="fas fa-bars"></div>

      <nav className="navbar">
        <ul>
          <a href="#home"> <li><button className={activePage == "home" ? "active" : "" }  onClick={()=>setActivePage("home")}> Home </button> </li> </a>
          <a href="#about"><li><button className={activePage == "about" ? "active" : "" } onClick={()=>setActivePage("about")} > About </button> </li> </a> 
          <a href="#skills"><li><button className={activePage == "skills" ? "active" : "" } onClick={()=>setActivePage("skills")}> Skills </button> </li> </a> 
          <a href="#experience"><li><button className={activePage == "experiance" ? "active" : "" } onClick={()=>setActivePage("experiance")} > Experience </button> </li></a> 
          <a href="#work"><li><button className={activePage == "projects" ? "active" : "" } onClick={()=>setActivePage("projects")}> Projects </button> </li> </a>
          <a href="#education"><li><button className={activePage == "education" ? "active" : "" } onClick={()=>setActivePage("education")}> Education </button> </li> </a>
          <a href="#contact"><li><button className={activePage == "contact" ? "active" : "" } onClick={()=>setActivePage("contact")}> Contact </button> </li> </a>
        </ul>  
          
      </nav>

      
    </div>
  )
} 
