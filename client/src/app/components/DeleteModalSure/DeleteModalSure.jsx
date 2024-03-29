import React, { useContext, useState } from "react";
import "./DeleteModalSure.scss";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import { deleteRecordById, getLastIndicatorsToTypesApi } from "../../services/records.service";
import { formatDate } from "../../utils/formatDate";
import { arrayNameIndicators } from "../../utils/infoParameters";
import { Context } from "../../..";

export default function DeleteModalSure(props) {

  const {user, indicators} = useContext(Context)

  const deleteHistoryUser = () => {
    deleteRecordById(props.idRecord)
      .then(() => {
        props.toastMessage("Данные успешно удалены!");
        props.handleSuccessToast();
        props.handleClose();
        props.reRender()
        getLastIndicatorsToTypesApi(user.user.id, arrayNameIndicators).then(currentIndicators => {
          indicators.setIndicators(currentIndicators)
      })
      })
      .catch(() => {
        props.toastMessage(
          "Произошла ошибка при удалении данных! Повторите позднее..."
        );
        props.handleErrorToast();
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
    </>
  );
}
