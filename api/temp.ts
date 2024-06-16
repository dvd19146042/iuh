import axios from "axios";

export const getTempHardWareById = () => {
  return axios.get("/api/temp/bin");
};

export const resetTempHardWare = () => {
  return axios.post("/api/temp/bin", { code: "" });
};
