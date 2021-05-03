import React from "react";

export default function RecordCard({ record }) {
  return (
      <>
        <div>
            <div>
                <h2>{record.title}</h2>
                <h3>{record.artist} | {record.year}</h3>
            </div>
            {record.forSale ? (
                <>
                <div>FOR SALE</div>
                <div>Condition: {record.condition} Price: ${record.price}</div>
                <div>Seller: {record.sellerName}</div>
                <div>{record.sellerInfo.email} | {record.sellerInfo.phoneNum}</div>
                </>
            ) : (
                <div>Not For Sale</div>
            )}
        </div>
      </>
  )
}
