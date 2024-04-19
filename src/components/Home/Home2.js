import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              DEIXE-ME<span className="purple"> APRESENTAR </span> A VOCÊ
            </h1>
            <p className="home-about-body">
              Minha trajetória profissional é marcada por uma profunda paixão pela tecnologia e pela programação.
              <br />
              <br />Utilizo e estudo um conjunto de tecnologias amplamente reconhecidas e adotadas na indústria atualmente, incluindo 
              <i>
                <b className="purple"> Python, Javascript, Django, Bootstrap, React e React native.  </b>
              </i>
              <br />
              <br />
              Sou mais focado na parte de Frontend, com desenvolvimento de projetos e designs ligados a experiência e usabilidade do usuário desde&nbsp;
              <i>
                <b className="purple"> Websites </b> a
              </i>
              <i>
                <b className="purple"> Aplicativos mobile </b>
              </i>
              <br />
              <br />
              Trabalho com linguagens e frameworks muito utilizados no âmbito de desenvolvimento, como <b className="purple">Django</b> e
              <i>
                <b className="purple">
                  {" "}
                  Bootstrap
                </b>
              </i>
              &nbsp; além de
              <i>
                <b className="purple"> Javascript </b> e
              </i>
              <i>
                <b className="purple"> Python </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>SIGA-ME EM</h1>
            <p>
              Sinta-se a vontade para se <span className="purple">conectar </span>comigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/V1ctorGip"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/victor-de-oliveira-vieira-823284258/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/victordovs"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
