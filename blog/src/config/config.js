import axios from 'axios';

const instanceAxios = axios.create();

// 拦截请求
instanceAxios.interceptors.request.use(config=>{
    return config;
})

// 拦截响应
instanceAxios.interceptors.response.use(response=>{

    if(response.status ===  200 && response.statusText === 'OK'){
        return response.data && response.data;
    }

    return response;
})

export default instanceAxios;