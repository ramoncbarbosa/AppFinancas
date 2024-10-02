import axios from "axios";
import { API_BASE_URL } from "../../@env";

export const api = axios.create({
  baseURL: 'http://10.0.0.165:3333'
})