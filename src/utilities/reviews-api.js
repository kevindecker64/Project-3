const BASE_URL = "/api/reviews";

export function create(review) {
  console.log("--- reviews-api (create)");
  console.log(review);
  return fetch(BASE_URL, {
    method: "POST",
    headers: { "constent-type": "application/json" },
    body: JSON.stringify(review),
  }).then((res) => res.json());
}
