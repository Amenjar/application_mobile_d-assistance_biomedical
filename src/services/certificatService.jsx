
import http from './axiosContext';

export const getall = () =>{
    return http.get("/certificats/getall");
}
 