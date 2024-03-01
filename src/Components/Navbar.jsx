import React from 'react'
import "./Styles/Navbar.css"

export default function Navbar() {
  return (
    <div className='header'>


      <span className="logo"><i className="fab fa-node-js"></i> Aman</span>

      <div id="menu" className="fas fa-bars"></div>

      <nav className="navbar">
        <ul>
          <li><button className="active" > Home </button> </li>
          <li><button > About </button> </li>
          <li><button > Skills </button> </li>
          <li><button > Experience </button> </li>
          <li><button > Projects </button> </li>
          <li><button > Education </button> </li>
          <li><button > Contact </button> </li>
        </ul>  
          
      </nav>

      
    </div>
  )
} 
