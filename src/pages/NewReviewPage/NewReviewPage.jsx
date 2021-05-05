import React from "react";
import { Link, useLocation } from "react-router-dom";
import NewReviewForm from "../../Components/NewReviewForm/NewReviewForm";

export default function NewReviewPage({ user, handleAddReview }) {
  const {
    state: { record },
  } = useLocation();

  return (
    <>
      <h1>New Review Page</h1>
      <NewReviewForm
        handleAddReview={handleAddReview}
        user={user}
        record={record}
      />
      <Link to="/">CANCEL</Link>
    </>
  );
}
