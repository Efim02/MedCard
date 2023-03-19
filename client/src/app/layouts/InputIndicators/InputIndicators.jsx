import { Modal, Form, Button } from "react-bootstrap";
import React, { useContext, useState } from "react";
import "./InputIndicators.scss";
import { handInput } from "../../utils/constants";
import { createHandRecordApi } from "../../services/records.service";
import { Context } from "../../..";
import SuccessToast from "../../components/SuccessToast/SuccessToast";
import ErrorToast from "../../components/ErrorToast/ErrorToast";
import Spinner from "react-bootstrap/esm/Spinner";

const Indicator = (item, OnChange) => {
    return (
        <Form.Group key={item.indicatorEnum} className="form-hand-input">
            <Form.Label className="form-hand-input__label">{item.displayValue}:</Form.Label>
            <Form.Control
                className="form-hand-input__control"
                type="text"
                value={item.value}
                name={item.indicatorEnum}
                onChange={OnChange}
            />
        </Form.Group>
    )
}

const InputIndicators = ({show, onHide}) => {
    const {user} = useContext(Context)

    const [stateForm, setStateForm] = useState(handInput);

    const [showSuccessToast, setShowSuccessToast] = useState(false);
    const [showErrorToast, setShowErrorToast] = useState(false);

    const [toastMessage, setToastMessage] = useState("");

    const [loading, setLoading] = useState(false);


    const OnChange = (event) => {
        if (!isFinite(+event.target.value)){
            document.getElementsByName(event.target.name)[0].classList.add('form-hand-input__control_bad');
            return;
        } else {
            document.getElementsByName(event.target.name)[0].classList.remove('form-hand-input__control_bad');
        }

        setStateForm(stateForm.map(item => item.indicatorEnum === event.target.name? {...item, value: event.target.value}: item));
    };


    const sendIndicators = () => {
        const dataSend = stateForm.filter(item => +item.value !== 0).map(item => ({indicatorEnum: item.indicatorEnum, value: +item.value}));
        
        if (dataSend.length === 0) {
            return;
        }

        setLoading(true)

        createHandRecordApi((user.user.id),dataSend)
            .then(() => {
                setToastMessage("Данные успешно записаны!");
                setShowSuccessToast(true);
                setStateForm(stateForm.map(item => ({...item, value: 0})));
            })
            .catch((e)=>{
                setToastMessage("Произошла ошибка. Повторите позже...");
                setShowErrorToast(true)
                console.log(e.response.data.message)
            });
        setLoading(false);
        onHide();
    };

    return (
        <div>
            <Modal
                show={show}
                onHide={onHide}
                animation={true}
                dialogClassName="modal-hand-content"
            >
                <Modal.Header closeButton className="modal-hand-header">
                    <Modal.Title className="modal-hand-header__title">
                        Ручной ввод показателей
                    </Modal.Title>
                </Modal.Header>
                {loading ?
                    (<div
                        style={{ height: "auto" }}
                        className="d-flex justify-content-center align-items-center"
                    >
                        <Spinner className="main_spinner" />
                    </div>)
                    :
                    <div>
                        <Modal.Body className="modal-hand-body">
                            <Form className="modal-hand-body__form form-hand">
                                {stateForm.map( item => 
                                    Indicator(item,OnChange)
                                )}
                            </Form>
                            <Button className="modal-hand-body__button" onClick={sendIndicators}>Сохранить</Button>
                        </Modal.Body>
                    </div>
                }
            </Modal>
            <SuccessToast
                show={showSuccessToast}
                handleClose={()=>setShowSuccessToast(false)}
                children={toastMessage}
            />
            <ErrorToast
                show={showErrorToast}
                handleClose={()=>setShowErrorToast(false)}
                children={toastMessage}
            />
        </div>
    )
}

export default InputIndicators;