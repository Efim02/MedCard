import React, { useEffect, useState } from "react";
import "./ModalHistory.scss";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/esm/Spinner";
import HistoryTableRow from "../../components/HistoryTableRow/HistoryTableRow";

export default function ModalHistory(props) {
  const [loading, setLoading] = useState(true);
  const [userHistory, setUserHistory] = useState([]);

  useEffect(() => {
    //fetch history parameters user
    setTimeout(() => {
      setLoading(false);
    }, 500);
    setUserHistory(['test', 'test']);
  }, []);

  return (
    <>
      <Modal
        className="modal_history"
        show={props.show}
        onHide={props.handleClose}
        animation={true}
        size={"xl"}
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>История показателей</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loading ? (
            <Row>
              <Col>
                <div
                  style={{ height: "auto" }}
                  className="d-flex justify-content-center align-items-center"
                >
                  <Spinner className="main_spinner"/>;
                </div>
              </Col>
            </Row>
          ) : (
            <Row>
              <Col>
                {userHistory.length !== 0 ? (
                  <Table>
                    <thead>
                      <tr>
                        <th>Идентификатор</th>
                        <th>Дата загрузки</th>
                        <th>Просмотр</th>
                        <th>Удаление</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userHistory.map((item) => {
                        return <HistoryTableRow key={Math.random()}/>; //Then change math function to id data
                      })}
                    </tbody>
                  </Table>
                ) : (
                  "У вас нет истоии загрузки показателей..."
                )}
              </Col>
            </Row>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}
