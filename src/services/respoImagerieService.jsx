import http from './axiosContext';
export const getall = ()=>{
    return http.get("/responsablesimg/getall");
}
export const getOne = (id)=>{
    return http.get(`/responsablesimg/getall/${id}`);
}