import axios from "axios";

export const getHardWareById = (id:string) => {
  return axios.get("/api/hardware/bin",{params:{
    id
  }});
};


export const notiHareWare = (id:string) => {
  return axios.get("/api/hardware/bin",{params:{
    id
  }});
};
