import request from "@/js/Axios";

export const getExamAxios = (examNuM) => {
    return request({
        url: '/getExam?examNum='+examNuM,
        method: 'GET',
    })
}

export const getPaperList=()=>{
    return request({
        url: 'getPaperList',
        method: 'POST',
    })
}