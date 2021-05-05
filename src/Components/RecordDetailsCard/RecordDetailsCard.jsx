import React from "react";
import { Link } from 'react-router-dom';

export default function RecordDetailsCard({ record }) {
  return (
    <>
      <div>
        <h2>{record.title}</h2>
        <h3>
          {record.artist} | {record.year}
        </h3>
        {record.forSale ? (
          <>
            <h4>For Sale</h4>
            <div>
              Condition: {record.condition} Price: ${record.price}
            </div>
            <div>Seller: {record.sellerName}</div>
            <div>
              {record.sellerInfo.email} | {record.sellerInfo.phoneNum}
            </div>
          </>
        ) : (
          <h4>Not For Sale</h4>
        )}
        <Link to={{ pathname: "/review", state: { record } }}>REVIEW</Link>
        &nbsp;
        <Link to='/'>RETURN TO LIST</Link>
      </div>
    </>
  );
}
