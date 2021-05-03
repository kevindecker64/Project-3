import React from "react";
import { useLocation } from "react-router";
import RecordDetailsCard from "../../Components/RecordDetailsCard/RecordDetailsCard";

export default function RecordDetailsPage(props) {
  const {
    state: { record },
  } = useLocation();

  return (
    <>
      <h1>Record Details</h1>
      <RecordDetailsCard record={record} key={record._id} />
    </>
  );
}
