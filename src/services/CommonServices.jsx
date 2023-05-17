import axios from "axios";

const base_url = 'https://backend.apcblockchain.com/api/'
// const base_url = 'http://localhost:3000/api/'
export const media_url="https://backend.apcblockchain.com/"
// export const media_url="http://localhost:3000/"

export const login = (payload) => {
    return axios.post(base_url + 'admin/signin', payload);
}
export const getMembers=(id)=>{
    return axios.get(base_url+`admin/getUsers/${id}`)
}
export const getUserInfo=(id)=>{
    return axios.get(base_url+`admin/getUserInfo/${id}`)
}
export const getAllTransactionRequests=()=>{
    return axios.get(base_url+'admin/getTransactions')
}
export const approveTransaction=(payload)=>{
    return axios.post(base_url+'admin/update-transc',payload)
}
export const uploadImages=(payload)=>{
    return axios.post(base_url+"upload/uploads",payload)
}
export const createUser=(payload)=>{
    return axios.post(base_url+'user/signup',payload)
}

export const changeUserStatus=(payload)=>{
    return axios.post(base_url+"admin/updateStatus",payload)
}