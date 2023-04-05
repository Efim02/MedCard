import React, { Suspense, useState } from "react";
import { BsEyeFill } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { formatDate } from "../../utils/formatDate";
import "./HistoryTableRow.scss";

const HistoryDetail = React.lazy(() =>
  import("../../layouts/HistoryDetail/HistoryDetail")
);

const DeleteModalSure = React.lazy(() =>
  import("../DeleteModalSure/DeleteModalSure")
);

export default function HistoryTableRow(props) {
  const [showModalDetailHistory, setShowModalDetailHistory] = useState(false);
  const handleOpenDetailHistory = () => setShowModalDetailHistory(true);
  const handleCloseDetailHistory = () => setShowModalDetailHistory(false);

  const [showModalDeleteHistory, setShowModalDeleteHistory] = useState(false);
  const handleOpenDeleteHistory = () => setShowModalDeleteHistory(true);
  const handleCloseDeleteHistory = () => setShowModalDeleteHistory(false);

  return (
    <>
      <tr className="row_table_history">
        <td className="id_col">{props.idRecord}</td>
        <td>{formatDate(props.date)}</td>
        <td className="type_col">
          {
            props.type == "Input" ? 
              "Ручной"
            :
              "Авто"
          }
        </td>
        <td >
          <a
            className="a_open_detail"
            onClick={() => handleOpenDetailHistory()}
          >
            <p className="text">Подробнее</p>
            <BsEyeFill className="row_icon" size={18}/>
          </a>
        </td>
        <td>
          <a
            className="a_open_delete"
            onClick={() => handleOpenDeleteHistory()}
          >
            <p className="text">Удалить</p>
            <MdDeleteForever className="row_icon" size={18}/>
          </a>
        </td>
      </tr>

      {showModalDetailHistory && (
        <Suspense>
          <HistoryDetail
            show={showModalDetailHistory}
            handleClose={handleCloseDetailHistory}
            idRecord={props.idRecord}
            date={props.date}
          />
        </Suspense>
      )}

      {showModalDeleteHistory && (
        <Suspense>
          <DeleteModalSure
            show={showModalDeleteHistory}
            handleClose={handleCloseDeleteHistory}
            idRecord={props.idRecord}
            date={props.date}
            reRender={props.reRender}
            handleSuccessToast={props.handleSuccessToast}
            handleErrorToast={props.handleErrorToast}
            toastMessage={props.toastMessage}
          />
        </Suspense>
      )}
    </>
  );
}
