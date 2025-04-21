import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import eduTechImg from "../../Assets/Projects/eduTechImg.png";
import ticTacToeImg from "../../Assets/Projects/ticTacToeImg.png";
import randomPassImg from "../../Assets/Projects/randomPassImg.png";
import Heart from "../../Assets/Projects/Heart.png";
import parallaxImg from "../../Assets/Projects/parallaxImg.png";
import Tableau from "../../Assets/Projects/Tableau.png";

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
              imgPath={Heart}
              isBlog={false}
              title="Heart Disease Predictor "
              description="Heart disease prediction using logistic regression with Flask UI, validating age, chest pain type, and heart rate inputs.  
Robust error handling ensures smooth user experience, catching dataset, training, and input errors."
              ghLink=""
              demoLink="https://www.abc.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tableau}
              isBlog={false}
              title="Data Visualization"
              description="Developed an interactive Tableau dashboard analyzing UEFA trends with dynamic visuals and intuitive navigation.  
Built a robust ETL pipeline to extract, clean, and transform data, presenting insights on country, club, and player performance."
              ghLink=""
              demoLink="https://abc.netlify.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={randomPassImg}
              isBlog={false}
              title="RANDOM PASSWORD GENERATOR"
              description="•	One can set constraints to generate the password like including uppercase letters, lowercase letters, Numbers and Symbols.
•	One can also set the length of the password to generate and we can also get to know whether the generated password is strong or weak.
"
              ghLink=""
              demoLink=" https://"            
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eduTechImg}
              isBlog={false}
              title="EduConnect"
              description="EduConnect is a cutting-edge educational platform built using the MERN stack (MongoDB, Express.js, React, Node.js), designed to revolutionize online learning. This platform offers a seamless, interactive, and engaging learning experience for students and educators alike. With features like real-time collaboration, personalized learning paths, and an intuitive user interface, EduConnect bridges the gap between traditional classrooms and modern digital education. Whether you're looking to enhance your skills or share your knowledge, EduConnect provides the tools and community to support your educational journey."
              demoLink="https://study-notion-edtech-frontend-pink.vercel.app/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={parallaxImg}
              isBlog={false}
              title="Parallax Effect"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/monk0707/parallax-effect"
              demoLink="https://monk0707.github.io/parallax-effect/"
              //  <--------Please include a demo link here
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ticTacToeImg}
              isBlog={false}
              title="TicTacToe"
              description="Created an AI-powered Tic Tac Toe opponent in C++ using the Minimax algorithm for optimal move selection.  
Optimized gameplay with a 2D matrix, constraint validation, and edge case handling, demonstrating strong OOP and algorithmic skills."
              ghLink=""
              demoLink="https://"      
              // <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
