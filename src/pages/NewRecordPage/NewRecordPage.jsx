import React from "react";
import NewRecordForm from "../../Components/NewRecordForm/NewRecordForm";

export default function NewRecordPage({ handleAddRecord, user }) {
  return (
    <>
      <h1>New Record Page</h1>
      <NewRecordForm handleAddRecord={handleAddRecord} user={user} />
    </>
  );
}
