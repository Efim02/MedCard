import React, { Suspense, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/esm/Card";
import { FiUploadCloud } from "react-icons/fi";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { TbTextResize } from "react-icons/tb";
import { BsGraphUp } from "react-icons/bs";
import { BsClockHistory } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./MainNavigation.scss";
import ModalChangeDataUser from "../ModalChangeDataUser/ModalChangeDataUser";
import InputIndicators from "../InputIndicators/InputIndicators";
import ModalLoadFile from "../ModalLoadFIle/ModalLoadFile";

const ModalHistory = React.lazy(() => import("../ModalHistory/ModalHistory"));

export default function MainNavigation() {
  const [handInputVisible, setHandInputVisible] = useState(false);
  const [loadFileVisible, setLoadFileVisible] = useState(false);
  
  const [loadIndicators, setLoadIndicators] = useState([]);
  const [isIndicatorsParse, setIsIndicatorsParse] = useState(false);
  
  const handleShowParseIndicators = (indicators) => {
    setLoadIndicators(indicators);
    setIsIndicatorsParse(true);
    setHandInputVisible(true);
  }

  const handleCloseModalHandInput = () =>{
    setHandInputVisible(false); 
    setIsIndicatorsParse(false); 
  }
  
  const handleCleanIndicatorsParse = (arr) => {
    setLoadIndicators(arr)
  }
 
  const [showModalChangeDataUser, setShowModalChangeDataUser] = useState(false);
  const handleCloseModalChangeDataUser = () =>
    setShowModalChangeDataUser(false);
  const handleShowModalChangeDataUser = () => setShowModalChangeDataUser(true);

  const [showModalHistory, setShowModalHistory] = useState(false);
  const handleCloseModalHistory = () => setShowModalHistory(false);
  const handleShowModalHistory = () => setShowModalHistory(true);

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
            <Card 
              className="main_navigation_container-card"
              onClick={() => setLoadFileVisible(true)}
            >
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
            <Card
              className="main_navigation_container-card"
              onClick={() => handleShowModalChangeDataUser()}
            >
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
            <Card 
              className="main_navigation_container-card"
              onClick={() => setHandInputVisible(true)}
            >
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
            <Link to="/dynamics">
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
            </Link>
          </Col>
          <Col
            lg={4}
            md={6}
            sm={12}
            className="card_container"
            onClick={() => handleShowModalHistory()}
          >
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

        <ModalChangeDataUser
          show={showModalChangeDataUser}
          handleClose={handleCloseModalChangeDataUser}
        />
        {showModalHistory && (
          <Suspense>
            <ModalHistory
              show={showModalHistory}
              handleClose={handleCloseModalHistory}
            />
          </Suspense>
        )}
        <InputIndicators 
          show= { handInputVisible } 
          onHide={ handleCloseModalHandInput }
          isParse = { isIndicatorsParse }
          indicatorsParse = { loadIndicators }
          cleanParse = { handleCleanIndicatorsParse }
        />
        <ModalLoadFile 
          show= { loadFileVisible } 
          onHide= { () => setLoadFileVisible(false) }
          parseShow = { (inds) => handleShowParseIndicators(inds) }
        />
      </Container>
    </>
  );
}
