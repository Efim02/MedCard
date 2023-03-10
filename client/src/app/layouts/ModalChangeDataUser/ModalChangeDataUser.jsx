import React, { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./ModalChangeDataUser.scss";
import Row from "react-bootstrap/esm/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Context } from "../../..";
import { updateUserApi } from "../../services/users.service";
import SuccessToast from "../../components/SuccessToast/SuccessToast";
import ErrorToast from "../../components/ErrorToast/ErrorToast";
import { observer } from "mobx-react-lite";
import Spinner from "react-bootstrap/esm/Spinner";

const ModalChangeDataUser = observer((props) => {
  const { user } = useContext(Context);

  const [weight, setWeight] = useState(user.user.weight || 0);
  const [height, setHeight] = useState(user.user.height || 0);

  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);

  const [toastMessage, setToastMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const handleShowSuccessToast = () => setShowSuccessToast(true);
  const handleCloseSuccessToast = () => setShowSuccessToast(false);

  const handleShowErrorToast = () => setShowErrorToast(true);
  const handleCloseErrorToast = () => setShowErrorToast(false);

  const changeUserData = (id, weight, height) => {
    setLoading(true);
    updateUserApi({ id, weight, height })
      .then(() => {
        setToastMessage("Данные успешно обновлены!");
        handleShowSuccessToast();
        setLoading(false);
        props.handleClose();
      })
      .catch(() => {
        setToastMessage(
          "Произошла ошибка при обновлении данных! Повторите позднее..."
        );
        handleShowErrorToast();
        setLoading(false);
        props.handleClose();
      });
  };

  return (
    <>
      <Modal
        className="modal_change_data"
        show={props.show}
        onHide={props.handleClose}
        animation={true}
        size={"md"}
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Изменить параметры</Modal.Title>
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
            <Row>
              <FloatingLabel
                controlId="floatingHeight"
                label="Рост (см)"
                className="mb-3"
              >
                <Form.Control
                  defaultValue={height}
                  onChange={(e) => setHeight(e.target.value)}
                  type="number"
                  placeholder="Введите рост..."
                  required
                />
              </FloatingLabel>
              <FloatingLabel controlId="floatingWeight" label="Вес (кг)">
                <Form.Control
                  defaultValue={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  type="number"
                  placeholder="Введите вес..."
                  required
                />
              </FloatingLabel>
            </Row>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={() => changeUserData(user.user.id, weight, height)}
          >
            Сохранить
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
});

export default ModalChangeDataUser;
