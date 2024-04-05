import React ,{useState , useEffect , useMemo } from "react";
import "./Styles/Home.css";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { particlesObject } from "./Config/particles.config";
import Profile from "/ProfessionalPhoto1-removebgcrop.png";
import { ReactTyped } from "react-typed";

export default function Home() {

  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      
      await loadSlim(engine);

    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => (particlesObject),
    [],
  );


  return (
    
    <section className="home" id="home">
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />

      <div className="content">
        <h3>
          Hi There 👋
          <br /> I'm Aman <span>Ninave</span>
        </h3>
        <p>
          i am &nbsp;
          <ReactTyped 
              strings={[" Full-Stack Developer" , " Tech Mentor" , "Problem Solver"]} 
              typeSpeed={40}
              backSpeed={50}
              loop
          />
        </p>

        <button className="btn">
          <a href="https://drive.google.com/file/d/18eopvpn2KOoiqy7qVN1KZqylVlpgGohO/view?usp=sharing"><span>Know More About Me </span> </a> 
          <i className="fas fa-arrow-circle-up"></i>
        </button>

        <div className="socials">
          <ul className="social-icons">
            <li>
              <a
                className="linkedin"
                href="https://www.linkedin.com/in/aman-ninave-61890a1aa/"
                target="_blank"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                className="github"
                href="https://github.com/AmanNinave"
                target="_blank"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            {/* <li>
              <button
                className="instagram"
                href="https://www.instagram.com/amanninave987/"
              >
                <i className="fab fa-instagram" target="_blank"></i>
              </button>
            </li> */}
            <li>
              <a
                className="gmail"
                href="mailto:amanninave987@gmail.com "
                target="_blank"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="image">
        <img
          draggable="false"
          className="tilt"
          src={Profile}
          alt="Aman's Image"
        />
      </div>
      
    </section>
  );
}
