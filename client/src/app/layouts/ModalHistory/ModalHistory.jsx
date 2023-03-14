import React, { useContext, useEffect, useState } from "react";
import "./ModalHistory.scss";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/esm/Spinner";
import HistoryTableRow from "../../components/HistoryTableRow/HistoryTableRow";
import { getUserActualIndicators } from "../../services/records.service";
import { Context } from "../../..";

export default function ModalHistory(props) {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);
  const [userHistory, setUserHistory] = useState([]);

  const [render, setRender] = useState(false)

  const reRender = () => {
    setRender(render => !render)
  }

  useEffect(() => {
    getUserActualIndicators(user.user.id).then((data) => {
      setUserHistory(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    getUserActualIndicators(user.user.id).then((data) => {
      setUserHistory(data);
      setLoading(false);
    });
  }, [render])

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
                  <Spinner className="main_spinner" />;
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
                        return (
                          <HistoryTableRow
                            key={item.id}
                            date={item.created}
                            idRecord={item.id}
                            reRender={reRender}
                          />
                        );
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
