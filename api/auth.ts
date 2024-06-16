import axios from "axios";

export const login = (data: { email: string; password: string }) => {
  return axios.post("/api/login",data);
};
