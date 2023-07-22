import React from "react";
import "./Projects.css";
import project1 from "../assets/projects-01.png";
import project2 from "../assets/projects-02.png";
import project3 from "../assets/projects-03.png";
import project4 from "../assets/projects-04.png";
import project5 from "../assets/projects-05.png";
import project6 from "../assets/projects-06.png";
import project7 from "../assets/projects-07.png";
import project8 from "../assets/projects-08.png";


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
            <h3>Ayurvedic Shop</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
              veniam est temporibus Modi veniam est temporibus Modi veniam est
              temporibus
            </p>
          </div>
        </div>
        <div className="project-card">
          <img src={project2} alt="" />
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
          <img src={project3} alt="" />
          <div className="card-description">
            <h3>Sign in Page</h3>
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
            <h3>Noor Tech </h3>
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
            <h3>Airplane</h3>
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
            <h3>CT Agency</h3>
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
            <h3>Tech Static</h3>
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
            <h3>Bulb</h3>
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
