import React ,{useState , useEffect , useMemo } from "react";
import './App.css'


import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Experience from "./Pages/Experience";

function App() {

  return (
    <>
      <Navbar/>

      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      
      
    </>
  )
}

export default App
