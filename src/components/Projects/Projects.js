import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import todoApp from "../../Assets/Projects/todoApp.png";
import liveWeather from "../../Assets/Projects/liveWeather.png"
import gre from "../../Assets/Projects/gre.jpg"
import tm from "../../Assets/Projects/tm.jpg"
import hok from "../../Assets/Projects/hok.png"
import houseofkicks from "../../Assets/Projects/houseofkicks.png"

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
              imgPath={hok}
              isBlog={false}
              title="House of Kicks"
              description="House Of Kicks is website for sneakerheads to buy the most hyped sneakers that are out there. The website isn't just a shopping destination, it also educates user about the sneaker culture. Users can browse a catalog of bestselling and in demand sneakers. They can check the rating, available prices, historical prices and description of each shoe. Users can add the sneakers they like into the cart, enter their address and complete their order through the payment gateway. They also have the ability to see how if the sneakers they own have turned out to be good investments. The website is an end to end solution that enables sneaker head to get their hands on the most hot pair of sneakers in the market."
              ghLink="https://github.com/aayushNortheastern1905/web--dev-projects/tree/master/house_of_kicks-main/house_of_kicks-main"
             
            />
          </Col>

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
              ghLink="https://github.com/fluffyguy-prog/liveWeatherApp"
              demoLink="https://aayushsweatherapp.netlify.app/"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tm}
              isBlog={true}
              title="eQube Transformation Modeler"
              description="eQube-TM is a data modelling and mapping solution, that helps users to define data mapping with complex rule-based transformations between disparate data sources. Multiple applications can be mapped to a single destination application.
              TM provides a list of maps with the various purposes to eQube-MI for migration and integration-related activities. eQube-MI relies on maps to extract, transform and load data between the source side and the destination side."
              ghLink="https://www.1eq.com/products_eqube-tm"          
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={houseofkicks}
              isBlog={false}
              title="House of Kicks"
              description="A one stop shop for all sneaker heads to dive into the world of sneaker culture where we treat sneaker as a tangible
              investment and not just some commodity."
              ghLink="https://github.com/hrigvedk/house_of_kicks" 
              demoLink="https://house-of-kicks.netlify.app/auth"          
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
