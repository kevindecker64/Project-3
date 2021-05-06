import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import RecordDetailsCard from "../../Components/RecordDetailsCard/RecordDetailsCard";
import ReviewsCard from "../../Components/ReviewsCard/ReviewsCard";

import './RecordDetailsPage.css'

export default function RecordDetailsPage() {
  const {
    state: { record },
  } = useLocation();

  return (
    <>
      <h1>Record Details</h1>
      <div className="record-detail-page">
        <RecordDetailsCard record={record} key={record._id} />
        <hr />
        <ReviewsCard record={record} />
      </div>
      &nbsp;
      <div>
        <Link to={{ pathname: "/review", state: { record } }}>REVIEW</Link>
        &nbsp; | &nbsp;
        <Link to="/">RETURN TO LIST</Link>
      </div>
    </>
  );
}
