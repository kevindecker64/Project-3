import React from "react";
import RecordListItem from "../../Components/RecordListItem/RecordListItem";

export default function RecordIndexPage({ records, handleDeleteRecord, user }) {
  return (
    <>
      <h1>All Records</h1>

      {records.length > 0 ? (
        records.map((record) => (
          <RecordListItem
            record={record}
            key={record._id}
            handleDeleteRecord={handleDeleteRecord}
            user={user}
          />
        ))
      ) : (
        <h2>No Records</h2>
      )}
    </>
  );
}
