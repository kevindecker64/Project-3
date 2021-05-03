import React from "react";
import { Link } from "react-router-dom";

export default function RecordListItem({ record, handleDeleteRecord, user }) {
  return (
    <>
      <div>
        <h2>{record.title}</h2>
        <h3>
          {record.artist} | {record.year}
        </h3>
        <div>
          <Link to={{ pathname: "/details", state: { record } }}>DETAILS</Link>
          {record.sellerName === user.name && (
            <button onClick={() => handleDeleteRecord(record._id)}>
              DELETE
            </button>
          )}
        </div>
      </div>
      &nbsp;
    </>
  );
}
