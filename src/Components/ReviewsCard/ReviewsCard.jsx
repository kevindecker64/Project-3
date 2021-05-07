import React, { useEffect, useState } from "react";
import * as recordsAPI from "../../utilities/records-api";

export default function ReviewsCard({ record }) {
  const [reviews, setReviews] = useState([]);
  const [showReviews, setShowReviews] = useState(false);

  useEffect(() => {
    async function populateReviews() {
      const populatedRecord = await recordsAPI.getReviews(record);
      setReviews(populatedRecord.reviews);
    }
    populateReviews();
  }, [record]);

  return (
    <>
      <h3>Reviews</h3>
      {record.reviews.length > 0 ? (
        <>
          <div>
            <button onClick={() => setShowReviews(!showReviews)}>
              {showReviews ? "Hide" : "Show"}
            </button>
          </div>
          &nbsp;
        </>
      ) : (
        <div>No Reviews</div>
      )}
      {showReviews &&
        reviews.map((review, idx) => (
          <div key={idx}>
            <div>{review.userName}</div>
            <div>Stars: {review.stars}</div>
            <div>Review: {review.review}</div>
            &nbsp;
          </div>
        ))}
    </>
  );
}
