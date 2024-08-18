import axios from "axios";

const axiosInstance = axios.create({
    baseURL :"https://fakestoreapi.com/"
})

axiosInstance.interceptors.response.use((res) => {
    if(res.status === 200){
        return res
    } 
}, (error)=>{
    if(error.res && error.res.status === 401){
        console.log("unauthorized...Got Api Token")
    }else if(error.res && error.res.status === 500){
        return Promise.rehect(error.res)
    }else{
        Promise.reject(error)
    }
});

export default axiosInstance;