import React, { useEffect, useRef, useState } from "react";

export default function NewReviewForm({ handleAddReview, user, record }) {
  const [invalidForm, setValidForm] = useState(true);
  const [formData, setFormData] = useState({
    userId: user._id,
    userName: user.name,
    recordId: record._id,
    recordInfo: { title: record.title, artist: record.artist },
    stars: 3,
    review: "",
  });

  const formRef = useRef();

  useEffect(() => {
    formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
  }, [formData]);

  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleAddReview(formData);
  };

  return (
    <>
      <h2>{record.title}</h2>
      <form
        className="container"
        autoComplete="off"
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <div>
          <label>Stars: </label>
          <input
            type="number"
            min="1"
            max="5"
            name="stars"
            value={formData.stars}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Review: </label>
          <input
            name="review"
            value={formData.review}
            onChange={handleChange}
          />
        </div>
        <button type="submit" disabled={invalidForm}>
          POST REVIEW
        </button>
        &nbsp;
      </form>
    </>
  );
}
