import React from 'react';
import './Styles/Footer.css'

const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>Aman's Portfolio</h3>
          <p>Thank you for visiting my personal portfolio website. Connect with me over socials. <br/> <br/> Please wait for a while all major projects will be listed soon. Till then keep visiting. Connect with me over live chat!</p>
        </div>
        <div className="box">
          <h3>Contact Info</h3>
          <p> <i className="fas fa-envelope"></i>hello@amanninave.in</p>
          <p> <i className="fas fa-map-marked-alt"></i>Nagpur, Maharashtra, India</p>
          <div className="share">
            <a href="https://www.linkedin.com/in/aman-ninave-61890a1aa/" className="fab fa-linkedin" target="_blank" rel="noopener noreferrer"></a>
            <a href="https://github.com/AmanNinave" className="fab fa-github" target="_blank" rel="noopener noreferrer"></a>
            <a href="mailto:hello@amanninave.in" className="fas fa-envelope" target="_blank" rel="noopener noreferrer"></a>
          </div>
        </div>
      </div>
      <h1 className="credit">Made with <i className="fa fa-heart pulse"></i> by <a href=""> Aman Ninave </a></h1>
    </section>
  );
};

export default Footer;
