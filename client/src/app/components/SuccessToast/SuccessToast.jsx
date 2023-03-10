import React from "react";
import Toast from "react-bootstrap/Toast";
import './SuccessToast.scss'

export default function SuccessToast(props) {
  return (
    <>
      <Toast
        className="success_toast"
        onClose={() => props.handleClose()}
        show={props.show}
        delay={3000}
        autohide
        bg={"success"}
      >
        <Toast.Header>
          <strong className="me-auto">Система</strong>
          <small>Только что</small>
        </Toast.Header>
        <Toast.Body>{props.children}</Toast.Body>
      </Toast>
    </>
  );
}
