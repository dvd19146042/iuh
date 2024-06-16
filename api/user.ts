import axios from "axios";

export const getAll = () => {
  return axios.post("/api/users");
};

export const deleteUser = (id:string) => {
  console.log(id)
  return axios.delete("/api/user",{params:{
    id
  }});
};

export const updateUser = (data:any) => {
  return axios.put("/api/user",data);
};

export const addUser = (data:any) => {
  return axios.post("/api/user",data);
};