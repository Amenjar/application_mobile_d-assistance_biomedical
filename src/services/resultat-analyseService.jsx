import http from './axiosContext';
export const getall = ()=>{
    return http.get("/resultatAnalys/getall");
}
export const getOne = (id)=>{
    return http.get(`/resultatAnalys/getall/${id}`);
}