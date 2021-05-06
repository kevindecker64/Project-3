import { sendRequest } from "./send-request";

const BASE_URL = "/api/records";

export function getAll() {
  return sendRequest(BASE_URL);

  // return fetch(BASE_URL).then((res) => res.json());
}

export function create(record) {
  return sendRequest(BASE_URL, "POST", record);
}

export function update(record) {
  return sendRequest(`${BASE_URL}/${record._id}`, "PUT", record);
}

export function deleteOne(id) {
  return sendRequest(`${BASE_URL}/${id}`, "DELETE");
}

export function review(review) {
  return sendRequest(`${BASE_URL}/${review.recordId}/reviews`, "POST", review);
}

export function getReviews(record) {
  return sendRequest(`${BASE_URL}/${record._id}`);

  // return fetch(`${BASE_URL}/${record._id}`).then((res) => res.json());
}
