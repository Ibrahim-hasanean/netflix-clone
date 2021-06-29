import axios from "axios";

const baseURL = "https://api.themoviedb.org/3";
const axiosInstance = axios.create({ baseURL: baseURL });

export default axiosInstance;
