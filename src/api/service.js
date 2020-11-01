import axios from 'axios'
const service=axios.create({
    // baseURL:'http://localhost:5000',
    baseURL:'/api',
    timeout:3000,
    withCredentials:false,
    headers:{
        'Content-type':'application/json;charset:utf-8'
    }
})
export default service  