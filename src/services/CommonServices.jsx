import axios from "axios";

const base_url = 'https://backend.apcblockchain.com/api/'
export const media_url="https://backend.apcblockchain.com/"

export const login = (payload) => {
    return axios.post(base_url + 'admin/signin', payload);
}
export const getMembers=(id)=>{
    return axios.get(base_url+`admin/getUsers/${id}`)
}
export const getUserInfo=(id)=>{
    return axios.get(base_url+`admin/getUserInfo/${id}`)
}