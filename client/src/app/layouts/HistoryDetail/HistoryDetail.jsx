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
import Badge from "react-bootstrap/Badge";
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
                <Col xs={5}>
                  {dataHistory.indicators.map((item) => (
                    <Row key={item.indicatorEnum} className="mb-4">
                      <Col xs={2}>{item.indicatorEnum + ": "}</Col>
                      <Col xs={10}>
                        <Form.Control
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
                <Col xs={1}></Col>
                <Col xs={6}>
                  <Row>
                    <Row>Показатели в норме:</Row>
                    <Row>
                      {goodParameters.map((item, idx) => {
                        return (
                          <Col key={idx} className="p-1" xs={2}>
                            <Badge key={idx} bg="success" className="w-100">
                              {item}
                            </Badge>
                          </Col>
                        );
                      })}
                    </Row>
                  </Row>
                  <Row>
                    <Row>Показатели не в норме:</Row>
                    <Row>
                      {badParameters.map((item, idx) => {
                        return (
                          <Col key={idx} className="p-1" xs={2}>
                            <Badge key={idx} bg="danger" className="w-100">
                              {item}
                            </Badge>
                          </Col>
                        );
                      })}
                    </Row>
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
