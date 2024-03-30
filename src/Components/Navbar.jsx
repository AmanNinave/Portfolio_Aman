import React from 'react'
import "./Styles/Navbar.css"

export default function Navbar() {
  return (
    <div className='header'>


      <span className="logo"><i className="fab fa-node-js"></i> Aman</span>

      <div id="menu" className="fas fa-bars"></div>

      <nav className="navbar">
        <ul>
          <a href="#home"> <li><button className="active" > Home </button> </li> </a>
          <a href="#about"><li><button > About </button> </li> </a> 
          <a href="#skills"><li><button > Skills </button> </li> </a> 
          <a href="#experience"><li><button > Experience </button> </li></a> 
          <a href="#work"><li><button > Projects </button> </li> </a>
          <a href="#education"><li><button > Education </button> </li> </a>
          <a href="#contact"><li><button > Contact </button> </li> </a>
        </ul>  
          
      </nav>

      
    </div>
  )
} 
