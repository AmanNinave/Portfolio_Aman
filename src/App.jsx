import React ,{useState , useEffect , useMemo } from "react";
import './App.css'


import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";

function App() {

  return (
    <>
      <Navbar/>

      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      
      
    </>
  )
}

export default App
