import React, { useState } from "react";
import "./DeleteModalSure.scss";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import { deleteRecordById } from "../../services/records.service";
import SuccessToast from "../SuccessToast/SuccessToast";
import ErrorToast from "../ErrorToast/ErrorToast";
import { formatDate } from "../../utils/formatDate";

export default function DeleteModalSure(props) {
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);

  const [toastMessage, setToastMessage] = useState("");

  const handleShowSuccessToast = () => setShowSuccessToast(true);
  const handleCloseSuccessToast = () => setShowSuccessToast(false);

  const handleShowErrorToast = () => setShowErrorToast(true);
  const handleCloseErrorToast = () => setShowErrorToast(false);

  const deleteHistoryUser = () => {
    deleteRecordById(props.idRecord)
      .then(() => {
        setToastMessage("Данные успешно удалены!");
        handleShowSuccessToast();
        props.handleClose();
        props.reRender()
      })
      .catch(() => {
        setToastMessage(
          "Произошла ошибка при удалении данных! Повторите позднее..."
        );
        handleShowErrorToast();
        props.handleClose();
      });
  };

  return (
    <>
      <Modal
        className="modal_delete_data"
        show={props.show}
        onHide={props.handleClose}
        animation={true}
        size={"md"}
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Удалить историю</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Вы действительно хотите удалить данную историю показателей от {formatDate(props.date)}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => deleteHistoryUser()}>
            Удалить
          </Button>
        </Modal.Footer>
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
