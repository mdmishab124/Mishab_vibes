import React from 'react';
import './Hero.css';
import { Link } from 'react-scroll';
import Imu from '../assets/imu.png';
import WordFlick from './WordFlick';

const Hero = () => (
  <div className="hero" id="home">
    <div className="hero-overlay">
      <div className="description">
        <h2 className="title">Hi, my name is <span>Mishab</span></h2>
        <h3 className="tagline">i design and develop<WordFlick/></h3>
        <p className="paragraph">I'm passionate about crafting exceptional digital experiences. I bring ideas to life in the virtual realm with a keyboard as my paintbrush and lines of code as my canvas. Let's join forces and bring your digital dreams to fruition. Get in touch, and let's embark on this exciting journey together!</p>
        <div className="hero-btns">
          <button className="hire-me">
            <a href="https://www.kickresume.com/cv/WJQp7z/" target="_blank" rel="noreferrer">
              GET MY CV
            </a>
          </button>
          <button className="lets-talk">
            <Link spy smooth offset={50} duration={500} to="contact">
              LET'S TALK
            </Link>
          </button>
        </div>
      </div>
      <img src={Imu} alt="prantosh" className="hero-image" />
    </div>
    <div className="social-icons">
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github" />
        </a>
        <a href="https://www.linkedin.com/in/adam-mishab-b52812229" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-linkedin-in" />
        </a>
        <a href="https://www.instagram.com/adam_vibes_ooo/" target="_blank" rel="noreferrer">
          <i className="fab fa-instagram" />
        </a>
        <a href="https://twitter.com/jo_hn88498" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-twitter" />
        </a>
      </div>
  </div>
);

export default Hero;
