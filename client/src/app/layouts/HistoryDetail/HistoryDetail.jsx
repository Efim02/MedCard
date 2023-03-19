import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Modal from "react-bootstrap/Modal";
import { getIndicatorsByIdRecord } from "../../services/records.service";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/esm/Spinner";
import { formatDate } from "../../utils/formatDate";
import Stack from "react-bootstrap/esm/Stack";
import { BsArrowLeft } from "react-icons/bs";
import {
  isBadParameters,
  isGoodParameters,
} from "../../utils/goodOrBadParameters";
import "./HistoryDetail.scss";

export default function HistoryDetail(props) {
  const [dataHistory, setDataHistory] = useState({});
  const [loading, setLoading] = useState(true);

  const [goodParameters, setGoodParameters] = useState([]);
  const [badParameters, setBadParameters] = useState([]);

  useEffect(() => {
    getIndicatorsByIdRecord(props.idRecord).then((data) => {
      setDataHistory(data);
      setGoodParameters(isGoodParameters(data.indicators));
      setBadParameters(isBadParameters(data.indicators));
      setLoading(false);
    });
  }, []);

  console.log(dataHistory);

  return (
    <>
      <Modal
        className="modal_history"
        show={props.show}
        onHide={props.handleClose}
        animation={true}
        size={"xl"}
        centered
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>История показателей</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loading ? (
            <div
              style={{ height: "auto" }}
              className="d-flex justify-content-center align-items-center"
            >
              <Spinner className="main_spinner" />;
            </div>
          ) : (
            <Row className="row_history_detail">
              <Row className="mb-4">
                <Col>
                  <Stack
                    className="goback_container"
                    direction="horizontal"
                    gap={2}
                  >
                    <BsArrowLeft onClick={() => props.handleClose()} />
                    <p className="goback_title">
                      {"Показатели от " + formatDate(props.date)}
                    </p>
                  </Stack>
                </Col>
              </Row>
              <Row>
                <Col xl={5} xs={12}>
                  {dataHistory.indicators.map((item) => (
                    <Row key={item.indicatorEnum} className="mb-4">
                      <Col className="indicators_form-name" xs={2}>
                        {item.indicatorEnum + ": "}
                      </Col>
                      <Col xs={10}>
                        <Form.Control
                          className="input_indicators"
                          key={item.indicatorEnum}
                          defaultValue={item.value}
                          type="number"
                          placeholder="Данные параметра..."
                          disabled
                        />
                      </Col>
                    </Row>
                  ))}
                </Col>
                <Col xl={1} xs={0}></Col>
                <Col xl={6} xs={12}>
                  <Row>
                    <Col>
                      <Row className="indicators_good-title">
                        Показатели в норме:
                      </Row>
                      <Row>
                        {goodParameters.length !== 0 ? (
                          goodParameters.map((item, idx) => {
                            return (
                              <div key={idx} className="badge-success">
                                {item}
                              </div>
                            );
                          })
                        ) : (
                          <div className="badge-info">Нет параметров</div>
                        )}
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Row className="indicators_bad-title">
                        Показатели не в норме:
                      </Row>
                      <Row>
                        {badParameters.length !== 0 ? (
                          badParameters.map((item, idx) => {
                            return (
                              <div key={idx} className="badge-danger">
                                {item}
                              </div>
                            );
                          })
                        ) : (
                          <div className="badge-info">Нет параметров</div>
                        )}
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Row>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}
