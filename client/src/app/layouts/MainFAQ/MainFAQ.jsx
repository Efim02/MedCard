import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Accordion from "react-bootstrap/Accordion";
import { questionsMock } from "../../utils/mocks/questionsMock";
import "./MainFAQ.scss";

const MainFAQ = () =>  {
  return (
    <>
      <Container className="main_faq_container">
        <Row>
          <p className="main_faq_container-title">Частые вопросы</p>
        </Row>
        <Row>
          <Col lg={12}>
            <Accordion defaultActiveKey="0">
              {questionsMock.map((question) => (
                <Accordion.Item
                key={question.id}
                  eventKey={question.id}
                  className="main_faq_container-question_item"
                >
                  <Accordion.Header className="main_faq_container-question_title">
                    {question.name}
                  </Accordion.Header>
                  <Accordion.Body className="main_faq_container-question_body">
                    {question.info}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MainFAQ
