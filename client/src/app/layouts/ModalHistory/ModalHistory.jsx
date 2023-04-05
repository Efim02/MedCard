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
import SuccessToast from "../../components/SuccessToast/SuccessToast";
import ErrorToast from "../../components/ErrorToast/ErrorToast";

export default function ModalHistory(props) {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);
  const [userHistory, setUserHistory] = useState([]);

  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);

  const [toastMessage, setToastMessage] = useState("");

  const handleShowSuccessToast = () => setShowSuccessToast(true);
  const handleCloseSuccessToast = () => setShowSuccessToast(false);

  const handleShowErrorToast = () => setShowErrorToast(true);
  const handleCloseErrorToast = () => setShowErrorToast(false);

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
                        <th className="id_col_row">Идентификатор</th>
                        <th>Дата загрузки</th>
                        <th className="type_col">Тип загрузки</th>
                        <th className="view_col">Просмотр</th>
                        <th className="delete_col">Удаление</th>
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
                            type={item.addingEnum}
                            handleSuccessToast={handleShowSuccessToast}
                            handleErrorToast={handleShowErrorToast}
                            toastMessage={setToastMessage}
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

      <SuccessToast
        show={showSuccessToast}
        handleClose={handleCloseSuccessToast}
        children={toastMessage}
      />
      <ErrorToast
        show={showErrorToast}
        handleClose={handleCloseErrorToast}
        children={toastMessage}
      />
    </>
  );
}
