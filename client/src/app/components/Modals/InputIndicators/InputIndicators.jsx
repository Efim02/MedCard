import { Modal, Form, Button } from "react-bootstrap";
import React, { useState } from "react";
import "./InputIndicators.scss";
import { handInput } from "../../../utils/constants";

const Indicator = (item, OnChange) => {
    return (
        <Form.Group key={item.name} className="form-input">
            <Form.Label className="form-input__label">{item.name}:</Form.Label>
            <Form.Control
                className="form-input__control"
                type="text"
                value={item.value}
                name={item.name}
                onChange={OnChange}
            />
        </Form.Group>
    )
}

const InputIndicators = ({show, onHide}) => {
    const [stateForm, setStateForm] = useState(handInput);

    const OnChange = (event) => {
        if (!isFinite(+event.target.value)){
            document.getElementsByName(event.target.name)[0].classList.add('form-input__control_bad');
            return;
        } else {
            document.getElementsByName(event.target.name)[0].classList.remove('form-input__control_bad');
        }

        setStateForm(stateForm.map(item => item.name === event.target.name? {...item, value: event.target.value}: item));
    }

    const sendIndicators = () => {
        const dataSend = stateForm.filter(item => +item.value !== 0).map(item => ({...item, value: +item.value}));
        console.log(dataSend);
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
        >
            <Modal.Header closeButton className="modal-header">
                <Modal.Title className="modal-header__title">
                    Ручной ввод показателей
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-body">
                <Form className="modal-body__form form">
                    {stateForm.map( item => 
                        Indicator(item,OnChange)
                    )}
                </Form>
                <Button className="modal-body__button" onClick={sendIndicators}>Сохранить</Button>
            </Modal.Body>
        </Modal>
    )
}

export default InputIndicators;