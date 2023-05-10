import request from "@/js/Axios";
export const LoginAxios=(data)=>{
    return request({
        url:'/Login',
        method:'POST',
        data
    })
}