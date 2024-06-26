import React from 'react';
import './Styles/Contact.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();
  const username = useRef();
  const email = useRef();
  const phone = useRef();
  const message = useRef();



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
          username.current.value = "";
          phone.current.value = "";
          email.current.value = "";
          message.current.value = "";
          toast.success('🚀 Message Sent!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            
            });
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('😔 Failed!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            
            });
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
                <input type="text" ref={username} name="user_name" placeholder="Name" required />
                <i className='fas fa-user'></i>
              </div>
              <div className="field">
                <input type="text" ref={email} name="user_email" placeholder="Email" required />
                <i className='fas fa-envelope'></i>
              </div>
              <div className="field">
                <input type="text" ref={phone} name="user_phone" placeholder="Phone" />
                <i className='fas fa-phone-alt'></i>
              </div>
              <div className="message">
                <textarea placeholder="Message" ref={message} name="message" required></textarea>
                <i className="fas fa-comment-dots"></i>
              </div>
            </div>
            <div className="button-area">
              <button type="submit" value="send">Submit <i className="fa fa-paper-plane"></i></button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer
      className="tostContainer"
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition: Bounce
      />
    </section>
  );
};

export default Contact;
