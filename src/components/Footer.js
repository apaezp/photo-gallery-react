import React from 'react';
import './Footer.css';
import Button from 'react-bootstrap/Button';


function Footer() {
  return (
    <> 
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join our newsletter to receive our lastest updates!
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time!
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button variant="success">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            
            
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
          
           
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
           
            
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>          
          
          <small className='website-rights'>Andrea Páez. All rights reserved © 2022</small>
          
          </div>
        </section>
      </div>
    
    </>
  );
}


export default Footer;