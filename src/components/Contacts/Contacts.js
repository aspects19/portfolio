import { RiGithubFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { ImLinkedin2 } from "react-icons/im";
import { SlSocialInstagram } from "react-icons/sl";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import React, { useState } from 'react';
import './Contacts.css';

function Contacts() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [formMessage, setFormMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('subject', subject);
    formData.append('message', message);

    try {
      const response = await fetch('https://formspree.io/f/xqkrjoyv', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormMessage('Thank you for your message!');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        alert('Email was sent successfully!');
      } else {
        const data = await response.json();
        if (data.errors) {
          setFormMessage(data.errors.map(error => error.message).join(', '));
        } else {
          setFormMessage('Oops! There was a problem submitting your form.');
        }
      }
    } catch (error) {
      setFormMessage('Oops! There was a problem submitting your form.');
    }
  };

  return (
    <div className='contacts' id='contacts'>
      <h1>Contact me</h1>
      <div className='contacts-container'>
        <div className='socials'>
          <img className='avatar-pic2' src='assets/aspect-logo3.png' alt='' />
          <div className='my-contacts'>
            <AiOutlineWhatsApp className='contact-icon' color='green' />
            <span className='wa-number'>+254794141227</span>
            <IoMdMail className='contact-icon' color='blue' />
            <span className='my-email'>jeffamenya388@gmail.com</span>
          </div>
          <div className='social-media'>
            <a href='https://github.com/aspects19/' target='_blank' rel='noopener noreferrer'><RiGithubFill className='social-icon' /> </a>
            <a href='https://twitter.com/m_aspect3' target='_blank' rel='noopener noreferrer'><FaXTwitter className='social-icon' /> </a>
            <a href='https://ke.linkedin.com/in/jeff-amenya-55ba872b9' target='_blank' rel='noopener noreferrer'><ImLinkedin2 className='social-icon' /></a>
            <a href='https://instagram.com/americ_inc_' target='_blank' rel='noopener noreferrer'><SlSocialInstagram className='social-icon' /></a>
          </div>
        </div>
        <div className='email-container'>
          <div className='contact-me'><span>Talk to me?</span></div>
          <div className='my-contact-info'>
            <img className='avatar-contact-pic' src='assets/avatar2.jpg' alt='' />
            <span className='my-name'>Jeffarson amenya</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='sender-name'>
              <label>Name</label>
              <input
                name="name"
                className='name-input'
                placeholder='Input your name...'
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className='em-en-sub'>
              <div className='sender-email '>
                <label>Email</label>
                <input
                  name="email"
                  className='email-input'
                  placeholder='Input your email...'
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className='sender-subject'>
                <label>Subject</label>
                <input
                  name="subject"
                  className='subject'
                  placeholder='subject...'
                  type='text'
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
            </div>
            <div className='message-container'>
              <label>Message</label>
              <textarea
                name="message"
                className='message'
                placeholder='Message...'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              <input type="submit" className='send' value='Send' />
            </div>
          </form>
          <div>{formMessage}</div>
        </div>
      </div>
      <div className='email-footer'>&copy;amenya creations | 2024 </div>
    </div>
  );
}

export default Contacts;
