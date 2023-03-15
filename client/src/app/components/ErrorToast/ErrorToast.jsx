import React from "react";
import Toast from "react-bootstrap/Toast";
import './ErrorToast.scss'

export default function ErrorToast(props) {
  return (
    <>
      <Toast
        className="error_toast"
        onClose={() => props.handleClose()}
        show={props.show}
        delay={3000}
        autohide
        bg={"danger"}
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
