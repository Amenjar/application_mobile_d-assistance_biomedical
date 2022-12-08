import http from './axiosContext';
export const getall = ()=>{
    return http.get("/responsables/getall");
}
export const getOne = (id)=>{
    return http.get(`/responsables/getall/${id}`);
}