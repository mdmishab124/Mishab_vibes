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
        Deployed 20+ scalable websites and crafting amazing graphic designs. Now seeking my next exhilarating project or role.
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
            A static website where users can immerse themselves in 
            a captivating showcase of technology and creativity.
            Explore an array of mesmerizing projects on this 
            innovative webpage
            </p>
          </div>
        </div>
        <div className="project-card">
          <img src={project3} alt="" />
          <div className="card-description">
            <h3>Techys Page</h3>
            <p>
            Unlock your creativity with this interactive static 
            website. Contact us to bring your beautiful designs to 
            life through our expert team's craftsmanship and 
            innovation.
            </p>
          </div>
        </div>
        <div className="project-card">
          <img src={project4} alt="" />
          <div className="card-description">
            <h3>Ayurvedic Shop Site</h3>
            <p>
            Users can discover the essence of Ayurveda at your 
            doorstep. Shop authentic Ayurvedic products and explore 
            a world of holistic wellness
            </p>
          </div>
        </div>
        <div className="project-card">
          <img src={project5} alt="" />
          <div className="card-description">
            <h3>Malayalam Typography</h3>
            <p>
            Embrace the art of typography in its purest form. This 
            captivating image showcases the power of visual language, 
            inviting you to experience the beauty of letters and 
            design.
            </p>
          </div>
        </div>
        <div className="project-card">
          <img src={project6} alt="" />
          <div className="card-description">
            <h3>Login Page</h3>
            <p>
            Experience hassle-free access with my stunning login page.
             Seamlessly designed for efficiency and style, this page 
             sets the tone for a user-friendly journey into our 
             website's captivating offerings.
            </p>
          </div>
        </div>
        <div className="project-card">
          <img src={project7} alt="" />
          <div className="card-description">
            <h3>Sign In Page</h3>
            <p>
            Welcome to a seamless sign-in experience with a touch of 
            elegance. Dive into the intuitive design of this login 
            page, where functionality meets aesthetics, making it a 
            standout feature of my website.
            </p>
          </div>
        </div>
        <div className="project-card">
          <img src={project8} alt="" />
          <div className="card-description">
            <h3>Computer Accessories Store Site</h3>
            <p>
            Welcome to the ultimate hub for computer enthusiasts! 
            Discover a wide range of top-quality accessories at 
            unbeatable prices. Explore our carefully curated products 
            and elevate your tech experience through this 
            cutting-edge website
            </p>
          </div>
        </div>
        <div className="project-card">
          <img src={project9} alt="" />
          <div className="card-description">
            <h3>Typography</h3>
            <p>
            Behold the essence of creativity embodied in this 
            typography masterpiece. A harmonious blend of fonts and 
            design, this captivating project speaks volumes about the 
            artistry behind every stroke.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
