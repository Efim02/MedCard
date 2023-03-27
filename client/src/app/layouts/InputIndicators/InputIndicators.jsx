import { Modal, Form, Button } from "react-bootstrap";
import React, { useContext, useState } from "react";
import "./InputIndicators.scss";
import { handInput } from "../../utils/constants";
import { createHandRecordApi, getLastIndicatorsToTypesApi } from "../../services/records.service";
import { Context } from "../../..";
import SuccessToast from "../../components/SuccessToast/SuccessToast";
import ErrorToast from "../../components/ErrorToast/ErrorToast";
import Spinner from "react-bootstrap/esm/Spinner";
import { arrayNameIndicators } from "../../utils/infoParameters";

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

const InputIndicators = ({show, onHide, isParse, indicatorsParse}) => {
    const {user, indicators} = useContext(Context)

    const [stateForm, setStateForm] = useState(handInput);
    if (isParse) {
        indicatorsParse.forEach((item) => {
            stateForm.find(i => i.indicatorEnum == item.indicatorEnum).value = item.value;
        })
    }

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
        
        const addingEnum = isParse? "Parse": "Input";

        setLoading(true)

        createHandRecordApi((user.user.id),addingEnum, dataSend)
            .then(() => {
                setToastMessage("Данные успешно записаны!");
                setShowSuccessToast(true);
                setStateForm(stateForm.map(item => ({...item, value: 0})));
                getLastIndicatorsToTypesApi(user.user.id, arrayNameIndicators).then(currentIndicators => {
                    indicators.setIndicators(currentIndicators)
                })
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
                            <div className="modal-hand-body__buttons">
                                <Button className="modal-hand-body__button button_close" onClick={onHide}>Отмена</Button>
                                <Button className="modal-hand-body__button button_send" onClick={sendIndicators}>Сохранить</Button>
                            </div>
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