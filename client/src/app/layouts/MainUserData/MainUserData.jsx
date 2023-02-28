import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

import "./MainUserData.scss";
import Parameter from "../../components/Parameter/Parameter";
import { bloodParameters } from "../../utils/mocks/bloodParametersMock";
export default function MainUserData() {
  return (
    <>
      <Container className="user_container">
        <Row className="user_data_container">
          <Col xs={6} sm={6} md={3} lg={2} xl={2} className="avatar_container">
            <Image
              roundedCircle
              src="assets/avatar_user.png"
              className="user_avatar"
            />
          </Col>
          <Col sm={12} md={9} lg={10} xl={10}>
            <Card className="user_card">
              <Card.Body>
                <Container>
                  <Row>
                    <Col xl={12} lg={6} md={6}>
                      <Card.Text className="FIO_user">
                        Иванова Анна Ивановна
                      </Card.Text>
                    </Col>
                    <Col xl={12} lg={6} md={6}>
                      <Row>
                        <Col md={12} xl={4} lg={4}>
                          <Card.Text className="params_user">
                            Рост: 162 см.
                          </Card.Text>
                        </Col>
                        <Col md={12} xl={4} lg={4}>
                          <Card.Text className="params_user">
                            Вес: 51 кг.
                          </Card.Text>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="container_parameters">
          {bloodParameters.map((param) => (
            <Col key={param.id} sm={6} md={6} lg={3} xl={2}>
              <Parameter
                key={param.id}
                value={param.value}
                name={param.name}
                info={param.info}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
