import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá pessoal, eu sou <span className="purple">Victor de Oliveira </span>
            moro no <span className="purple"> Brasil em Palmas-TO</span>
            <br />
            Atualmente trabalho como analista de sistemas e desenvolvedor na SECAD-TO.
            <br />
            Concluí minha graduação de Engenharia de Software na ULBRA Palmas.
            <br />
            <br />
            Além da programação em si, estudo também...
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Governança de TI
            </li>
            <li className="about-activity">
              <ImPointRight /> Gerencia de projetos
            </li>
            <li className="about-activity">
              <ImPointRight /> Engenharia de requisitos
            </li>
          </ul>

          <p style={{ color: "#87CEEB" }}>
            "Nós podemos apenas ver um curto trecho do futuro, mas o suficiente para perceber que existem obstáculos suficientes para tornar o nosso avanço difícil."{" "}
          </p>
          <footer className="blockquote-footer">Alan Turing</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
