import axios from "axios";

export default axios.create({
  baseURL: "http://10.128.16.210:8000/",
  headers: {
    "Content-type": "application/json",
  },
});