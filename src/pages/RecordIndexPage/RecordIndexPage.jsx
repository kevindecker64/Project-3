import React from "react";
import RecordCard from "../../Components/RecordCard/RecordCard";

export default function RecordIndexPage({ records }) {
  return (
    <>
      <h1>RecordIndexPage</h1>

      {records.length > 0 ? (
        records.map((record) => <RecordCard record={record} key={record._id} />)
      ) : (
        <h2>No Records</h2>
      )}
    </>
  );
}
