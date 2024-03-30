import React from 'react';
import './Styles/Contact.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import dotenv from 'dotenv';

// dotenv.config();

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm( 
        import.meta.env.VITE_APP_EMAIL_SERVICE_ID ,
        import.meta.env.VITE_APP_EMAIL_TEMPLATE_ID , 
        form.current, {
        publicKey: import.meta.env.VITE_APP_EMAIL__PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading"><i className="fas fa-headset"></i> Get in <span>Touch</span></h2>
      <div className="container">
        <div className="content">
          <div className="image-box">
            <img draggable="false" src="./contact1.png" alt="" />
          </div>
          <form id="contact-form" ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <div className="field">
                <input type="text" name="user_name" placeholder="Name" required />
                <i className='fas fa-user'></i>
              </div>
              <div className="field">
                <input type="text" name="user_email" placeholder="Email" required />
                <i className='fas fa-envelope'></i>
              </div>
              <div className="field">
                <input type="text" name="user_phone" placeholder="Phone" />
                <i className='fas fa-phone-alt'></i>
              </div>
              <div className="message">
                <textarea placeholder="Message" name="message" required></textarea>
                <i className="fas fa-comment-dots"></i>
              </div>
            </div>
            <div className="button-area">
              <button type="submit" value="send">Submit <i className="fa fa-paper-plane"></i></button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
