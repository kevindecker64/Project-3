const BASE_URL = "/api/records";

export function getAll() {
  return fetch(BASE_URL).then((res) => res.json());
}

export function create(record) {
  return fetch(BASE_URL, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(record),
  }).then((res) => res.json());
}

export function update(record) {
  return fetch(`${BASE_URL}/${record._id}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(record),
  }).then((res) => res.json());
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
}
