import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import EditRecordForm from "../../Components/EditRecordForm/EditRecordForm";

export default function EditRecordPage(props) {
  const {
    state: { record },
  } = useLocation();

  return (
    <>
      <h1>Edit Record Page</h1>
      <EditRecordForm
        key={record._id}
        handleUpdateRecord={props.handleUpdateRecord}
      />
      <Link to="/">CANCEL</Link>
    </>
  );
}
