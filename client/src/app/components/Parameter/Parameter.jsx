import React from "react";
import Card from "react-bootstrap/Card";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

import "./Parameter.scss";
import Row from "react-bootstrap/esm/Row";

const popover = (props) => (
  <Popover id="popover-basic" className="param_popover">
    <Popover.Header className="param_popover_header">
      {props.name} - {props.info.fullName} ({props.info.measure})
    </Popover.Header>
    <Popover.Body className="param_popover_body">
      <Row>Норма для мужчин: {props.info.menNorm}</Row>
      <Row>Норма для женщин: {props.info.womenNorm}</Row>
    </Popover.Body>
  </Popover>
);

export default function Parameter(props) {
  return (
    <>
      <Card className="parameter_card">
        <Card.Body>
          <div className="popover_card">
            <OverlayTrigger
              trigger={["hover", "focus"]}
              placement="top"
              overlay={popover(props)}
            >
              <i>
                <BsFillQuestionCircleFill className="icon_question" />
              </i>
            </OverlayTrigger>
          </div>
          <Card.Title className="parameter_card_title">{props.name}</Card.Title>
          <Card.Text className="parameter_card_text">{props.value}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
