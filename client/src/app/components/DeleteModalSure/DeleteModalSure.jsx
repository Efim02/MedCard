import React from "react";
import "./DeleteModalSure.scss";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";

export default function DeleteModalSure(props) {

  const deleteHistoryUser = () => {
    // Do delete func
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
          Вы действительно хотите удалить данную историю показателей от 04.02.2022?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => deleteHistoryUser()}>
            Удалить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
