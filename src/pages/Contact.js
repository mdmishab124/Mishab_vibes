import React from 'react';
import './Contact.css';

const Contact = () => (
  <div className="contact" id="contact">
    <div className="footer-left">
      <h1>
        I LOVE
        {' '}
        <br />
        COFFEE
        <br />
        {' '}
        CHAT ☕︎
      </h1>
    </div>
    <div className="footer-right">
      <h3>I'M ALWAYS INTERESTED ABOUT</h3>
      <div className="interests">
        <p>Frontend Development</p>
        <p>React</p>
        <p>Backend Development</p>
        <p>Graphic design</p>
        <p>WordPress Development</p>
        <p>Startups</p>
        <p>New Opportunities</p>
        <p>Coffee</p>
        <p>Space</p>
        <p>Pizza</p>
      </div>

      <hr />

      <h3>
        MINDING A PROJECT?
        <span><a href="mailto:md.mishab124@gmail.com">ClickMeToContactMe</a></span>
      </h3>

      <hr />

      <div className="social">
        <span><a href="https://github.com/" target="_blank" rel="noreferrer">GITHUB</a></span>
        <span>
          {' '}
          <a href="https://www.instagram.com/mishab_vibes_/" target="_blank" rel="noreferrer">INSTAGRAM</a>
        </span>
        <span>
          {' '}
          <a href="https://web.telegram.org/a/#1150894158" target="_blank" rel="noreferrer">TELAGRAM</a>
        </span>
        <span><a href="https://www.twitter.com/" target="_blank" rel="noreferrer">TWITTER</a></span>
      </div>
    </div>
  </div>
);

export default Contact;
