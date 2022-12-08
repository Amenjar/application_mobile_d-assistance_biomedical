import http from './axiosContext';
export const getall = ()=>{
    return http.get("/medecins/getall");
}
export const getOne = (id)=>{
    return http.get(`/medecins/getall/${id}`);
}