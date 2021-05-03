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
          &nbsp;
          {record.sellerName === user.name && (
            <>
              <Link to={{ pathname: "/edit", state: { record } }}>EDIT</Link>
              <button onClick={() => handleDeleteRecord(record._id)}>
                DELETE
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
