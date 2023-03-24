import React, { useContext, useState } from "react";
import { Image, Modal, Spinner } from "react-bootstrap";
import { Context } from "../../..";
import ErrorToast from "../../components/ErrorToast/ErrorToast";
import SuccessToast from "../../components/SuccessToast/SuccessToast";
import { createRecordByLoadFile, getLastIndicatorsToTypesApi } from "../../services/records.service";
import { arrayNameIndicators } from "../../utils/infoParameters";
import "./ModalLoadFile.scss";

const ModalLoadFile = ({show, onHide}) => {
    const {user, indicators} = useContext(Context)
    const [loading, setLoading] = useState(false);
    const [drag, setDrag] = useState(false);

    const [showSuccessToast, setShowSuccessToast] = useState(false);
    const [showErrorToast, setShowErrorToast] = useState(false);

    const [toastMessage, setToastMessage] = useState("");

    function chooseInFileExplorer() {
        const fileInput = document.getElementById("fileInput");
        fileInput.click();
    }

    function dragStartHadler(e) {
        e.preventDefault();
        setDrag(true);

    }

    function dragLeaveHadler(e) {
        e.preventDefault();
        setDrag(false);
    }

    function onDropHandler(e, isInput){
        e.preventDefault();
        let file = isInput? e.target.files[0] : [...e.dataTransfer.files][0];
        
        if (!checkIsPdf(file)){
            return;
        }
        
        const formFile = new FormData();
        formFile.append('formFile', file);
        
        setDrag(false);
        setLoading(true);

        createRecordByLoadFile(user.user.id, formFile)
            .then((data) => {
                setToastMessage('Данные записаны');
                setShowSuccessToast(true);
                getLastIndicatorsToTypesApi(user.user.id, arrayNameIndicators).then(currentIndicators => {
                    indicators.setIndicators(currentIndicators)
                })
            })
            .catch((e) => {
                setToastMessage("Произошла ошибка. Повторите позже...");
                setShowErrorToast(true)
            })
            .finally(() => {
                setLoading(false);
                onHide();
            });
        
    }

    function checkIsPdf(file){
        if (file.type !== 'application/pdf'){
            setToastMessage('Загрузите файл формата pdf');
            setShowErrorToast(true);
            return false;
        }
        return true;
    }

    return (
        <div>
            <Modal
                show={show}
                onHide={onHide}
                animation={true}
                centered={true}
                dialogClassName="load-file"
            >
                <Modal.Header 
                    closeButton
                    className="load-file__header"
                >
                    <Modal.Title className="load-file__title">Загрузить файл</Modal.Title>
                </Modal.Header>
                <Modal.Body className="load-file__body">
                    {loading?
                        <div
                            style={{ height: "auto" }}
                            className="d-flex justify-content-center align-items-center"
                        >
                            <Spinner className="main_spinner" />
                        </div>
                        :
                        <div className="drop-area-file">
                            <div
                                className="drop-area-file__content"
                                onDragStart={e => dragStartHadler(e)}
                                onDragLeave={e => dragLeaveHadler(e)}
                                onDragOver={e => dragStartHadler(e)}
                                onDrop={e => onDropHandler(e, false)}
                                onClick={() => chooseInFileExplorer()}
                            >
                                <Image 
                                    src="assets/load_file.svg"
                                    className="drop-area-file__icon"
                                />
                                <p 
                                    className="drop-area__text"
                                >
                                    {drag?
                                        "Release the file for load"
                                        :
                                        "Upload a file or drag and drop"
                                    }
                                </p>
                            </div>
                            
                            <input type="file" id="fileInput" style={{display: 'none'}} onChange={e => onDropHandler(e, true)} accept="application/pdf"/>
                        </div>
                    }
                </Modal.Body>
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

export default ModalLoadFile;