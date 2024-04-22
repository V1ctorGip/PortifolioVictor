import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Indicai from "../../Assets/Projects/Indicai.png";
import SciVerse from "../../Assets/Projects/SciVerse.png";
import Erecycle from "../../Assets/Projects/Erecycle.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus projetos <strong className="purple">Recentes </strong>
        </h1>
        <p style={{ color: "white" }}>
        Aqui estão alguns projetos em que trabalhei recentemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SciVerse}
              isBlog={false}
              title="SciVerse"
              description="Dashboards relacionados à produção científica de pesquisadores da instituição Ulbra Palmas."
              ghLink="https://github.com/V1ctorGip/SciVerse"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Erecycle}
              isBlog={false}
              title="E-Recycle"
              description="E-Recycle se trata de um sistema que gerencia a coleta e controle do lixo eletrônico na cidade de Palmas. Sendo o sistema de controle e coleta por parte das entidades responsáveis utilizando a WEB e o modelo Mobile para os usuários que chamam estas entidades para a coleta do lixo eletrônico em pontos específicos no mapa da cidade."
              ghLink="https://github.com/V1ctorGip/E-recycle"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Indicai}
              isBlog={false}
              title="Indicaí"
              description="indicaí é um app mobile que foi desenvolvido no Estação T.I de 2022 no Ulbra Palmas. Com o objetivo de indicar filmes, tendo até a possibilidade de ranking dos usuários mais críticos de filmes indicados."
              ghLink="https://github.com/V1ctorGip/Indicai"
              demoLink="https://www.figma.com/proto/axHZlKrRyqHx8IQmEGz0Kv/INDICAÍ?node-id=97-1486&starting-point-node-id=97%3A1486"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
