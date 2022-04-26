import axios from "axios";

const BASE_URL = "http://localhost:5000/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNWRmNGZmMjcxNzZiNWRhMGY4Y2Q1NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDcyMzE3NywiZXhwIjoxNjUwOTgyMzc3fQ.YuEkWz9RGtsD27gF8DP3XW-3Rxb3hc4OztYFP3GrmH4";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});