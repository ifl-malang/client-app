import axios from "axios";

const token = localStorage.getItem("token") || "";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${token || ""}`,
  },
});

export default API;
