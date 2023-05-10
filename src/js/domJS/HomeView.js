// 用来修改选择或者取消选择得背景颜色函数
const updateCssAscolor=(dom,num)=>{
    if (num===1){
        dom.style.backgroundColor='rgba(73,140,240,.3)'
    }
    if (num===0){
        dom.style.backgroundColor='white'
    }

}
 const updateLine=(dom,num)=>{
     console.log(dom,num)
    dom.style.lineHeight=300/num+"px"
}
export {
    updateCssAscolor,
    updateLine
}
