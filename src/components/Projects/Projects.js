import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Indicai from "../../Assets/Projects/Indicai.png";
import SciVerse from "../../Assets/Projects/SciVerse.png";
import Erecycle from "../../Assets/Projects/Erecycle.png";
import Clube from "../../Assets/Projects/Clube.png";
import Gecom from "../../Assets/Projects/Gecom.jpeg";
import CardVex from "../../Assets/Projects/CardVex.jpeg";
import Facialponto from "../../Assets/Projects/Facialponto.png";
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
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Clube}
              isBlog={false}
              title="Clube de Benefícios"
              description="Clube de Benefícios é um sistema de pesquisa por cpf dos servidores do estado do Tocantins, para que seja possível a visualização do seus status. Além disso, a medida que há empresas parceiras do estado, as mesmas possuem desconto em diversos serviços"
              ghLink="https://github.com/V1ctorGip/"
              demoLink="https://www.figma.com/proto/5oiFYE9yZPacqdpvfQIQL0/Consulta-Servidor?node-id=1-36&t=JVPWvxFI6GkpKFQ9-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=210%3A206&show-proto-sidebar=1"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Gecom}
              isBlog={false}
              title="Gecom"
              ghLink="https://github.com/V1ctorGip/GECOM"
              description="Gecom é um sistema analítico baseado nos servidores cujo o cargo é comissionado. Para administradores, é possível prover um servidor em determinado órgão ou em algum cargo vago."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CardVex}
              isBlog={false}
              ghLink="https://github.com/V1ctorGip/CardVex"
              title="CardVex"
              description="CardVex é um sistema de gestão de atividades totalmente versátil, trazendo açõe idênticas ao sistema Trello, além disso, mostrando em resumo as tasks do kanban em formato de dashboard. Sendo possível criar cards e movê-los dentro das listas."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Facialponto}
              isBlog={false}
              ghLink="https://github.com/V1ctorGip/Web-ponto"
              title="Facial Ponto"
              description="Facial ponto é um sistema de reconhecimento facial, realizado com o intuíto de substituir o sistema de web-ponto, que hoje atual como sistema de registro de ponto através das digitais."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
