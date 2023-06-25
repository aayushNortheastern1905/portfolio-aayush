import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import todoApp from "../../Assets/Projects/todoApp.png";
import liveWeather from "../../Assets/Projects/liveWeather.png"
import gre from "../../Assets/Projects/gre.jpg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todoApp}
              isBlog={false}
              title="TODO App"
              description="A personal TODO app, where users can add, update and delete their daily tasks as TODOs.This project is made using react.js and is deployed
              on github pages."
              ghLink="https://github.com/fluffyguy-prog/todoAppReact"
              demoLink="https://fluffyguy-prog.github.io/todoAppReact/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={liveWeather}
              isBlog={false}
              title="Live Weather App"
              description="A live weather app which auto detects the location and gives live information
              about the weather of that place. User can also search for weather in any city. This is project was made using React, css and open 
              map API "
              ghLink="https://aayushsweatherapp.netlify.app/"
              demoLink="https://github.com/fluffyguy-prog/liveWeatherApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gre}
              isBlog={false}
              title="GRE Resources"
              description="This is a compilation of all resources that I have used for my GRE test. This includes
              all the material needed to master vocab and quant sections in GRE. I have also included some of the essays I had written for practice."
              ghLink="https://github.com/fluffyguy-prog/gre-resources"           
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
