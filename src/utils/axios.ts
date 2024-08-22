import axios from "axios";

const SERVER = import.meta.env.VITE_SERVER;

const axiosServer = axios.create({
  baseURL: `${SERVER}`,
});

export default axiosServer;
