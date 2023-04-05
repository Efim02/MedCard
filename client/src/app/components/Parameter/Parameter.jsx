import React from "react";
import Card from "react-bootstrap/Card";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

import "./Parameter.scss";
import Row from "react-bootstrap/esm/Row";
import { infoParameters } from "../../utils/infoParameters";

const popover = (props) => (
  <Popover id="popover-basic" className="param_popover">
    <Popover.Header className="param_popover_header">
      {props.name == "GlycatedHemoglobin" ? "HbA1c": props.name} -{" "}
      {
        infoParameters[
          infoParameters.findIndex((param) => param.name === props.name)
        ].info.fullName
      }{" "}
      (
      {
        infoParameters[
          infoParameters.findIndex((param) => param.name === props.name)
        ].info.measure
      }
      )
    </Popover.Header>
    <Popover.Body className="param_popover_body">
      <Row>
        Норма для мужчин:{" "}
        {
          infoParameters[
            infoParameters.findIndex((param) => param.name === props.name)
          ].info.menNormMin + " - " +  infoParameters[
            infoParameters.findIndex((param) => param.name === props.name)
          ].info.menNormMax
        }
      </Row>
      <Row>
        Норма для женщин:{" "}
        {
          infoParameters[
            infoParameters.findIndex((param) => param.name === props.name)
          ].info.womenNormMin + " - " +  infoParameters[
            infoParameters.findIndex((param) => param.name === props.name)
          ].info.womenNormMax
        }
      </Row>
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
          <Card.Title className="parameter_card_title">{props.name == "GlycatedHemoglobin" ? "HbA1c": props.name}</Card.Title>
          <Card.Text className="parameter_card_text">{props.value}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
