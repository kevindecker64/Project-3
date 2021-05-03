import React from "react";
const BASE_URL = "/api/records";

export function getAll() {
  return fetch(BASE_URL).then((res) => res.json());
}
