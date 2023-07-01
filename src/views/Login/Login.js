import request from "../../../../../../bisai/admin/book-admin/src/api/Axios";
export const LoginAxios=(data)=>{
    return request({
        url:'/Login',
        method:'POST',
        data
    })
}