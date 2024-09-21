import React from "react";
// import WarrantyBanner from "../components/WarrantyBanner/WarrantyBanner copy";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import "../styles/Contact.css";

function Contact() {
  return (
   
    <div>
    <div className="contactBanner">
      <h2>Contact</h2>
      <p>
        <span>Home {">"} </span>
        Contact
      </p>
    </div>
    <div className="contactTitles">
      <h2>Get In Touch With Us</h2>
      <p>
        For more informations about our products & services. Please feel free
        to drop us an email. Our staff will always be there to help you out.
        Do not hesitate !
      </p>
    </div>
    
    <div className="contactFormContainer">
    <div class="contactForm">
      <div class="flex gap-4 lg:gap-8 items-start">
        {/* <img loading="lazy" src="/assets/adress-b49e9cef.svg" alt="adress"> */}
        <div class="">
        <label>
          Email address
        </label>
          <p>236 5th SE Avenue, New York NY10000, United States</p>
        </div>
      </div>
      <div >
        {/* <img loading="lazy" src="/assets/phone-13011fed.svg" alt="phone"> */}
        <div class="">
          <label htmlFor="">Phone</label>
          <p>Mobile: +(84) 546-6789</p>
          <p>Hotline: +(84) 456-6789</p>
        </div>
      </div>
      <div class="flex gap-4 lg:gap-8 items-start">
        {/* <img loading="lazy" src="/assets/clock-852d044e.svg" alt="clock"> */}
       <div class=""><label htmlFor="">Working Time</label>
          <p>Monday-Friday: 9:00 - 22:00</p><p>Saturday-Sunday: 9:00 - 21:00</p>
        </div>
      </div>
    </div>
    <form className="contactForm" action="/submit" method="post">
    <label>
        Your name
        <input type="text" name="name" placeholder="Your Name" required />
    </label>
    <label>
        Email address
        <input type="email" name="email" placeholder="Your Email" required />
    </label>
    <label>
        Subject
        <input type="text" name="subject" placeholder="Subject" required />
    </label>
    <label>
        Message
        <textarea name="message" placeholder="Your Message" required></textarea>
    </label>
    <div className="contactSubmitButton">
        <button type="submit">Submit</button>
    </div>
</form>

    </div>
 
  </div>
  );
}

export default Contact;
