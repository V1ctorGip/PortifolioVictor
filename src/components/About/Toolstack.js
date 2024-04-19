import React from 'react';
import { Col, Row, Tooltip, OverlayTrigger } from 'react-bootstrap';
import {
  SiBootstrap,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

function Toolstack() {
  const renderTooltip = (name) => (
    <Tooltip id={`tooltip-${name}`}>
      {name}
    </Tooltip>
  );

  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={renderTooltip('Bootstrap')}>
          <div><SiBootstrap /></div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={renderTooltip('Next.js')}>
          <div><SiNextdotjs /></div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={renderTooltip('Tailwind CSS')}>
          <div><SiTailwindcss /></div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={renderTooltip('TypeScript')}>
          <div><SiTypescript /></div>
        </OverlayTrigger>
      </Col>
    </Row>
  );
}

export default Toolstack;
