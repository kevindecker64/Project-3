import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import RecordDetailsCard from "../../Components/RecordDetailsCard/RecordDetailsCard";
import ReviewsCard from "../../Components/ReviewsCard/ReviewsCard";

export default function RecordDetailsPage({ user }) {
  const {
    state: { record },
  } = useLocation();

  return (
    <>
      <h1>Record Details</h1>
      <div className="container">
        <RecordDetailsCard record={record} key={record._id} />
        <hr />
        <ReviewsCard record={record} />
      </div>
      <div>
        {user && (
          <>
            <Link to={{ pathname: "/review", state: { record } }}>REVIEW</Link>
            &nbsp; | &nbsp;
          </>
        )}
        <Link to="/">RETURN TO LIST</Link>
      </div>
    </>
  );
}
