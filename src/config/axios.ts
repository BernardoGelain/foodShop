import axios from "axios";

const api = axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/cdn-dev.preoday.com/challenge/",
});

export default api;
