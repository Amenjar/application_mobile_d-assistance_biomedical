import http from './axiosContext';
export const getall = ()=>{
    return http.get("/resultatRadiologie/getall");
}
export const getOne = (id)=>{
    return http.get(`/resultatRadiologie/getall/${id}`);
}