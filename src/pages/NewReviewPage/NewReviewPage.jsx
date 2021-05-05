import React from "react";
import { Link, useLocation } from "react-router-dom";
import NewReviewForm from "../../Components/NewReviewForm/NewReviewForm";

export default function NewReviewPage({ user, handleAddReview }) {
  const {
    state: { record },
  } = useLocation();

  async function checkState() {
    console.log(record);
    console.log(user);
  }

  return (
    <>
      <h1>New Review Page</h1>
      <NewReviewForm
        handleAddReview={handleAddReview}
        user={user}
        record={record}
      />
      <Link to="/">CANCEL</Link>
      <button onClick={checkState}>Check State</button>
    </>
  );
}
