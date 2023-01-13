import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWFhMjUxNDc0OGVhZjJkNjQwMDJkYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MzQzODY1MiwiZXhwIjoxNjczNjk3ODUyfQ.oAG5qxrOyPF4k-h7YyEBdVajFR20bNUOzfzuc2jJYfg";
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    token: `Bearer ${TOKEN}`,
  },
});
