
import http from './axiosContext';
export const create = (data) => {
    return http.post("/rendez-vous/create",data);
  };
export const getall = () =>{
    return http.get("/rendez-vous/getall");
}
 