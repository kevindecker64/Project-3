import React from "react";

export default function ReviewsCard({ record }) {
  return (
    <>
      <h3>Reviews</h3>
      {record.ratings.length > 0 ? (
        record.ratings.map((rating, idx) => <div key={idx}>{rating}</div>)
      ) : (
        <h3>No Reviews</h3>
      )}
      &nbsp;
    </>
  );
}
