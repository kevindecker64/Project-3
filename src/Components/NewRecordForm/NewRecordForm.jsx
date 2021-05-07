import React, { useEffect, useRef, useState } from "react";

export default function NewRecordForm({ handleAddRecord, user }) {
  const [invalidForm, setValidForm] = useState(true);
  const [formData, setFormData] = useState({
    userId: user._id,
    title: "",
    artist: "",
    year: 1976,
    forSale: true,
    condition: "Good",
    price: 6.66,
    sellerName: user.name,
    sellerInfo: { email: user.email, phoneNum: user.phoneNum },
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
    handleAddRecord(formData);
  };

  return (
    <>
      <form
        className="container"
        autoComplete="off"
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <div>
          <label>Record Title: </label>
          <input
            name="title"
            placeholder="--Record Title--"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Artist Name: </label>
          <input
            name="artist"
            placeholder="--Artist Name--"
            value={formData.artist}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Year: </label>
          <input
            type="number"
            min="1898"
            max={new Date().getFullYear()}
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>For Sale: </label>
          <select
            name="forSale"
            value={formData.forSale}
            onChange={handleChange}
            required
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>
        <div>
          <label>Condition: </label>
          <select
            name="condition"
            value={formData.condition}
            onChange={handleChange}
            required
          >
            <option value="Mint">Mint</option>
            <option value="Very Good">Very Good</option>
            <option value="Good">Good</option>
            <option value="Meh">Meh</option>
            <option value="Poor">Poor</option>
          </select>
        </div>
        <div>
          <label>Price (US$): </label>
          <input
            type="number"
            step="0.01"
            min="0"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" disabled={invalidForm}>
          POST RECORD
        </button>
      </form>
    </>
  );
}
