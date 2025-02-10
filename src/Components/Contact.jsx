import React from 'react';
import Social from './Social';

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contactBox1">
      <h2>Contact Me</h2>
      <p id='Email'><i class="bi bi-envelope-at"></i><span>&nbsp;&nbsp;Email&nbsp;&nbsp;&nbsp;:  </span><a  href="mailto:akashmsm275@gmail.com">akashmsm275@gmail.com</a></p>
      <p id='Mobile' ><i class="bi bi-telephone"></i><span>&nbsp;&nbsp;Phone&nbsp;&nbsp;:&nbsp;</span><a href="tel:+918610206655">8610206655</a></p>
      </div>
      <div className="contactBox2">
        <Social/>
      </div>
    </section>
  );
}

export default Contact;
