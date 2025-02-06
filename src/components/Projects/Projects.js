import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import blogify from "../../Assets/Projects/blog.png";
import game from "../../Assets/Projects/game.png";
import guftgu from "../../Assets/Projects/guftgu.png";
import keeper from "../../Assets/Projects/keeper.png";
import matrix from "../../Assets/Projects/matrix.png";
import ticket from "../../Assets/Projects/ticket.png";

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
              imgPath={guftgu}
              isBlog={false}
              title="Guftgu"
              description="Real-time chat app developed using the MERN stack and Socket.io, enabling seamless communication between users with features like instant messaging, and user authentication."
              ghLink="https://github.com/suraj2025/guftgu-chatapp"
              demoLink="https://guftgu-chatapp-frontend.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={keeper}
              isBlog={false}
              title="Keeper"
              description="it is Note taking app build using React for UI and firebase for storing data and authentication."
              ghLink="https://github.com/suraj2025/Keeper-App"
              demoLink="https://keeper-807ae.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ticket}
              isBlog={false}
              title="Ticket-support-system"
              description="Developed a task management app with React.js and Node.js that boosted user engagement , while leading the creation of a Ticket Support System that enhanced customer support."
              ghLink="https://github.com/suraj2025/ticket-support-system"
              demoLink="https://ticket-support-system-1.onrender.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blogify}
              isBlog={false}
              title="Blogify"
              description="it is bloging app build using Node JS and EJS (for server side rendering) where anyone can see the posted blog, post own blog and also comment on any blogs."
              ghLink="https://github.com/suraj2025/blogify"
              demoLink="https://adorable-eagerness-production.up.railway.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={game}
              isBlog={false}
              title="Tic-Tac-Toe"
              description="it is two player game build using React and JavaScript."
              ghLink="https://github.com/suraj2025/Tic-Tac-Toe"
              demoLink="https://suraj2025.github.io/Tic-Tac-Toe/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={matrix}
              isBlog={false}
              title="Matrix-transpose-calculator"
              description="it is simple matrix transpose calculator build using HTML+CSS and JavaScript."
              ghLink="https://github.com/suraj2025/Matrix-Transpose-Calculator"
              demoLink="https://suraj2025.github.io/Matrix-Transpose-Calculator/"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
