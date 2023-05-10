<template>
  <div class="father">
    <div class="selectArray_right">
      <div  v-for="i in num" @click="clickSelectNum(i)" :class="'selectArrayClass'+(i)">
          {{i}}
      </div>
    </div>
  </div>
</template>

<script setup>
import {inject, toRef, watch} from "vue";
let props=defineProps({
  examChild:{
    type:Number
  }
})
let examNum=toRef(props)
const emit = defineEmits(['update:examChild'])
const num=200;
function clickSelectNum(i){
  emit('update:examChild',examNum=i)
  console.log("examChild"+i)
}


</script>

<style scoped lang="scss">
//.father{
//  scrollbar-arrow-color: red;
//  scrollbar-face-color: #333;
//  scrollbar-3dlight-color: #666;
//  scrollbar-highlight-color: #666;
//  scrollbar-shadow-color: #999;
//  scrollbar-darkshadow-color: #666;
//  scrollbar-track-color: #666;
//  scrollbar-base-color:#f8f8f8
//}


.father{
  /*定义整个滚动条高宽及背景：高宽分别对应横竖滚动条的尺寸*/

  //.el-loading-parent--relative {
  //  position: initial !important;
  //}

  .selectArray_right {

    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    div{
      width: 35px;
      height: 35px;
      border: 1px solid rgba(73,140,240,.5);

      //background-color: rgba(73,140,240,.3);
      background-color: white;
      color: #498cf0;
      border-radius: 5px;
      line-height: 35px;
      text-align: center;
      margin: auto;
      margin-left: 1px;
      margin-top: 3px;
      ::-webkit-scrollbar
      {
        width:10px;
        background-color:#F5F5F5;
      }
      /*定义滚动条轨道：内阴影+圆角*/
      ::-webkit-scrollbar-track
      {
        background-color:#F5F5F5;
      }
      /*定义滑块：内阴影+圆角*/
      ::-webkit-scrollbar-thumb
      {
        border-radius:10px;
        background-color:#555;
      }
    }
  }
}

</style>