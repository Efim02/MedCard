import React, { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import "./MainUserData.scss";
import Parameter from "../../components/Parameter/Parameter";
import { bloodParameters } from "../../utils/mocks/bloodParametersMock";
import { Context } from "../../..";
import { observer } from "mobx-react-lite";
import {
  getIndicatorsByIdRecord,
  getUserActualIndicators,
} from "../../services/records.service";
import Spinner from "react-bootstrap/esm/Spinner";
import Alert from "react-bootstrap/Alert";

const MainUserData = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);
  const [userIndicators, setUserIndicators] = useState([]);
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    getUserActualIndicators(user.user.id).then((data) => {
      if (data.length !== 0) {
        const dataSortById = data.sort(
          (a, b) => parseInt(b.id) - parseInt(a.id)
        );
        getIndicatorsByIdRecord(dataSortById[0].id).then((data) => {
          setUserIndicators(data.indicators);
          setLoading(false);
        });
      }
    });
  }, []);

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
                        {user.user ? user?.user.lastName : "Иванова"}{" "}
                        {user.user ? user?.user.firstName : "Анна"}{" "}
                        {user.user ? user?.user.patronymic : "Ивановна"}
                      </Card.Text>
                    </Col>
                    <Col xl={12} lg={6} md={6}>
                      <Row>
                        <Col md={12} xl={4} lg={4}>
                          <Card.Text className="params_user">
                            Рост: {user.user ? user?.user.height : "152"} см.
                          </Card.Text>
                        </Col>
                        <Col md={12} xl={4} lg={4}>
                          <Card.Text className="params_user">
                            Вес: {user.user ? user?.user.weight : "54"} кг.
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
          {loading ? (
            <div
              style={{ height: "auto" }}
              className="d-flex justify-content-center align-items-center"
            >
              <Spinner className="main_spinner" />;
            </div>
          ) : userIndicators.length !== 0 ? (
            userIndicators.map((param) => (
              <Col key={param.indicatorEnum} sm={6} md={6} lg={3} xl={2}>
                <Parameter
                  key={param.indicatorEnum}
                  value={param.value}
                  name={param.indicatorEnum}
                />
              </Col>
            ))
          ) : showAlert ? (
            <Alert
              variant="warning"
              onClose={() => setShowAlert(false)}
              dismissible
            >
              <Alert.Heading>Упс! Что-то не так...</Alert.Heading>
              <p>
                Кажется вы еще не загружали данные о своих параметрах... Нажмите
                на кнопку "Ввод показателей" для того, чтобы загрузить данные
                медицинского обследования.
              </p>
            </Alert>
          ) : (
            ""
          )}
        </Row>
      </Container>
    </>
  );
});

export default MainUserData;
