import React from "react";
import Modal from "react-bootstrap/Modal";

export default function HistoryDetail(props) {
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
          {/* Do params */}
        </Modal.Body>
      </Modal>
    </>
  );
}
