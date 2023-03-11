import React, { Suspense, useState } from "react";
import "./HistoryTableRow.scss";

const HistoryDetail = React.lazy(() =>
  import("../../layouts/HistoryDetail/HistoryDetail")
);

const DeleteModalSure = React.lazy(() =>
  import("../DeleteModalSure/DeleteModalSure")
);

export default function HistoryTableRow() {
  const [showModalDetailHistory, setShowModalDetailHistory] = useState(false);
  const handleOpenDetailHistory = () => setShowModalDetailHistory(true);
  const handleCloseDetailHistory = () => setShowModalDetailHistory(false);

  const [showModalDeleteHistory, setShowModalDeleteHistory] = useState(false);
  const handleOpenDeleteHistory = () => setShowModalDeleteHistory(true);
  const handleCloseDeleteHistory = () => setShowModalDeleteHistory(false);

  return (
    <>
      <tr className="row_table_history">
        <td>0142-9281-8181-8181</td>
        <td>05.06.2019</td>
        <td>
          <a
            className="a_open_detail"
            onClick={() => handleOpenDetailHistory()}
          >
            Подробнее
          </a>
        </td>
        <td>
          <a
            className="a_open_delete"
            onClick={() => handleOpenDeleteHistory()}
          >
            Удалить
          </a>
        </td>
      </tr>

      {showModalDetailHistory && (
        <Suspense>
          <HistoryDetail
            show={showModalDetailHistory}
            handleClose={handleCloseDetailHistory}
          />
        </Suspense>
      )}

      {showModalDeleteHistory && (
        <Suspense>
          <DeleteModalSure
            show={showModalDeleteHistory}
            handleClose={handleCloseDeleteHistory}
          />
        </Suspense>
      )}
    </>
  );
}
