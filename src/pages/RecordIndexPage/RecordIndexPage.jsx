import React from "react";
import * as usersService from "../../utilities/users-service";
import RecordCard from "../../Components/RecordCard/RecordCard";

export default function RecordIndexPage({ records }) {
  async function handleCheckToken() {
    usersService.checkToken();
  }

  return (
    <>
      <h1>RecordIndexPage</h1>

      {records ? (
        records.map((record) => <RecordCard record={record} key={record._id} />)
      ) : (
        <h2>No Records</h2>
      )}

      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
  );
}
