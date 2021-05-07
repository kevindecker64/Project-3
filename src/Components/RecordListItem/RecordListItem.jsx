import React from "react";
import { Link } from "react-router-dom";

export default function RecordListItem({ record, handleDeleteRecord, user }) {
  return (
    <>
      <div className="container">
        <h2>{record.title}</h2>
        <h3>
          {record.artist} | {record.year}
        </h3>
        <div>
          <Link to={{ pathname: "/details", state: { record } }}>DETAILS</Link>
          {user && (
            <>
              &nbsp; | &nbsp;
              <Link to={{ pathname: "/review", state: { record } }}>
                REVIEW
              </Link>
              &nbsp;
            </>
          )}
          {user && record.userId === user._id && (
            <>
              &nbsp; | &nbsp;
              <Link to={{ pathname: "/edit", state: { record } }}>EDIT</Link>
              &nbsp; | &nbsp;
              <button className="delete-btn" onClick={() => handleDeleteRecord(record._id)}>
                DELETE
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
