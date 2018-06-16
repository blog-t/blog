import axios from 'axios';

const instanceAxios = axios.create();

// 拦截请求
instanceAxios.interceptors.request.use(config=>{
    console.log(config);
    return config;
})

// 拦截响应
instanceAxios.interceptors.response.use(response=>{
    console.log(response);
    return response;
})

export default instanceAxios;