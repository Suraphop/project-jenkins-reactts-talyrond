import axios from "axios";

export default axios.create({
  baseURL: "http://192.168.100.187:3000/",
  headers: {
    "Content-type": "application/json",
  },
});