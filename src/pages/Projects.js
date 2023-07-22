import React from "react";
import "./Projects.css";
import project1 from "../assets/projects-01.jpg";
import project2 from "../assets/projects-02.jpg";
import project3 from "../assets/projects-10.jpg";
import project4 from "../assets/projects-09.jpg";
import project5 from "../assets/projects-05.jpg";
import project6 from "../assets/projects-11.jpg";
import project7 from "../assets/projects-07.jpg";
import project8 from "../assets/projects-08.jpg";
import project9 from "../assets/projects-04.jpg";


const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h1 className="title projects-title">Featured Projects</h1>
      <p className="projects-para">
        Deployed 50+ scalable websites and crafting amazing graphic designs. Now seeking my next exhilarating project or role.
      </p>
      <div className="projects-container">
        <div className="project-card">
          <img src={project1} alt="" />
          <div className="card-description">
            <h3>Airplane</h3>
            <p>
            Experience the thrill of flying in our captivating airplane 
            game on our static website. And when you're ready, download 
            the game to enjoy the excitement anytime, anywhere
            </p>
          </div>
        </div>
        <div className="project-card">
          <img src={project2} alt="" />
          <div className="card-description">
            <h3>Noor Tech</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
              veniam est temporibus Modi veniam est temporibus Modi veniam est
              temporibus
            </p>
          </div>
        </div>
        <div className="project-card">
          <img src={project3} alt="" />
          <div className="card-description">
            <h3>Techys Page</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
              veniam est temporibus Modi veniam est temporibus Modi veniam est
              temporibus
            </p>
          </div>
        </div>
        <div className="project-card">
          <img src={project4} alt="" />
          <div className="card-description">
            <h3>Ayurvedic Shop Site</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
              veniam est temporibus Modi veniam est temporibus Modi veniam est
              temporibus
            </p>
          </div>
        </div>
        <div className="project-card">
          <img src={project5} alt="" />
          <div className="card-description">
            <h3>Malayalam Typography</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
              veniam est temporibus Modi veniam est temporibus Modi veniam est
              temporibus
            </p>
          </div>
        </div>
        <div className="project-card">
          <img src={project6} alt="" />
          <div className="card-description">
            <h3>Login Page</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
              veniam est temporibus Modi veniam est temporibus Modi veniam est
              temporibus
            </p>
          </div>
        </div>
        <div className="project-card">
          <img src={project7} alt="" />
          <div className="card-description">
            <h3>Sign In Page</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
              veniam est temporibus Modi veniam est temporibus Modi veniam est
              temporibus
            </p>
          </div>
        </div>
        <div className="project-card">
          <img src={project8} alt="" />
          <div className="card-description">
            <h3>Computer Accessories Store Site</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
              veniam est temporibus Modi veniam est temporibus Modi veniam est
              temporibus
            </p>
          </div>
        </div>
        <div className="project-card">
          <img src={project9} alt="" />
          <div className="card-description">
            <h3>Typography</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
              veniam est temporibus Modi veniam est temporibus Modi veniam est
              temporibus
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
