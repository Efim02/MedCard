import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/esm/Card";
import { FiUploadCloud } from "react-icons/fi";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { TbTextResize } from "react-icons/tb";
import { BsGraphUp } from "react-icons/bs";
import { BsClockHistory } from "react-icons/bs";
import "./MainNavigation.scss";

export default function MainNavigation() {
  return (
    <>
      <Container className="main_navigation_container">
        <Row>
          <p className="main_navigation_container-title">
            Медицинский паспорт сотрудника
          </p>
        </Row>
        <Row>
          <Col lg={4} md={6} sm={12} className="card_container">
            <Card className="main_navigation_container-card">
              <Row className="h-100 w-100 row-btn">
                <Col className="main_navigation_container-btn_title" lg={9}>
                  <p> Загрузить файл</p>
                </Col>
                <Col
                  className="main_navigation_container-btn_icon_container"
                  lg={3}
                >
                  <FiUploadCloud
                    size={60}
                    className="main_navigation_container-btn_icon"
                  />
                </Col>
              </Row>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12} className="card_container">
            <Card className="main_navigation_container-card">
              <Row className="h-100 w-100 row-btn">
                <Col className="main_navigation_container-btn_title" lg={9}>
                  <p>Изменить параметры</p>
                </Col>
                <Col
                  className="main_navigation_container-btn_icon_container"
                  lg={3}
                >
                  <BsFillFileEarmarkPersonFill
                    size={60}
                    className="main_navigation_container-btn_icon"
                  />
                </Col>
              </Row>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12} className="card_container">
            <Card className="main_navigation_container-card">
              <Row className="h-100 w-100 row-btn">
                <Col className="main_navigation_container-btn_title" lg={9}>
                  <p>Ручной ввод показателей</p>
                </Col>
                <Col
                  className="main_navigation_container-btn_icon_container"
                  lg={3}
                >
                  <TbTextResize
                    size={60}
                    className="main_navigation_container-btn_icon"
                  />
                </Col>
              </Row>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12} className="card_container">
            <Card className="main_navigation_container-card">
              <Row className="h-100 w-100 row-btn">
                <Col className="main_navigation_container-btn_title" lg={9}>
                  <p>Динамика показателей</p>
                </Col>
                <Col
                  className="main_navigation_container-btn_icon_container"
                  lg={3}
                >
                  <BsGraphUp
                    size={60}
                    className="main_navigation_container-btn_icon"
                  />
                </Col>
              </Row>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12} className="card_container">
            <Card className="main_navigation_container-card">
              <Row className="h-100 w-100 row-btn">
                <Col className="main_navigation_container-btn_title" lg={9}>
                  <p>История показателей</p>
                </Col>
                <Col
                  className="main_navigation_container-btn_icon_container"
                  lg={3}
                >
                  <BsClockHistory
                    size={60}
                    className="main_navigation_container-btn_icon"
                  />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
