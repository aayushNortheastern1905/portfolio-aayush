import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiIntellijidea,
  SiWebstorm,
  SiWindows11,
  SiSubversion,
  SiWix,
  SiMicrosoftonenote,
  SiMicrosoftoffice,
  SiMicrosoftteams,
  SiPostman
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWebstorm/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows11/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSubversion/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWix/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftonenote/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftoffice/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftteams/>
      </Col>
    </Row>
  );
}

export default Toolstack;
