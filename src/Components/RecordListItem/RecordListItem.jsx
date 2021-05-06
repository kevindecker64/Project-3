import React from "react";
import { Link } from "react-router-dom";

import "./RecordListItem.css";

export default function RecordListItem({ record, handleDeleteRecord, user }) {
  return (
    <>
      <div className="record-list-item">
        <h2>{record.title}</h2>
        <h3>
          {record.artist} | {record.year}
        </h3>
        <div>
          <Link to={{ pathname: "/details", state: { record } }}>DETAILS</Link>
          &nbsp;
          <Link to={{ pathname: "/review", state: { record } }}>REVIEW</Link>
          &nbsp;
          {record.userId === user._id && (
            <>
              <Link to={{ pathname: "/edit", state: { record } }}>EDIT</Link>
              <button onClick={() => handleDeleteRecord(record._id)}>
                DELETE
              </button>
            </>
          )}
        </div>
        &nbsp;
      </div>
    </>
  );
}
