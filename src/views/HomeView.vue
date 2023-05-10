<template>
  <div style="background-color: #f9f9fb">
    <div class="top" style="display: flex;line-height: 50px">
      <div style="flex: 5">
        pc端考试系统
      </div>
      <div style="flex: 1;">
        <div id="countdown">
          <!--          {{parseInt(countdownNum.num/3600)}}:{{parseInt(parseInt(countdownNum.num%3600)/60)}}:{{parseInt(countdownNum.num%60)}}-->
        </div>
        <!--        <n-space>-->
        <!--    <span style="font-variant-numeric: tabular-nums">-->
        <!--      <n-countdown :on-finish="()=>{alert('倒计时结束')}" :duration="countdownNum.num" :active="active" />-->
        <!--    </span>-->
        <!--        </n-space>-->
      </div>
      <div style="flex: 1">
        提交
      </div>
    </div>
    <div style="display: flex">
      <div class="home">
        <div class="topic">
          <div class="topicNumber">
            {{ store.state.examNum }}
          </div>
          <div v-if="examArray[store.state.examNum-1].oneAndMore===0" style="width: 130px;font-size: 20px;color: red;margin-top: 5px">
            【单选题】
          </div>
          <div v-else style="width: 130px;font-size: 20px ;color: red;margin-top: 5px" >
            【多选题】
          </div>
          <div class="content"> {{
              topicContent
            }}
          </div>
        </div>
        <div class="select">
          <div :class='"select"+(index+1)' v-for="(n,index) in selectArrayReactive.arr" :key="index"
               @click="selected(index)">
            {{ n.selectValue }}

            {{ index }}
          </div>

        </div>
        <div class="button">
          <el-button class="right" type="primary" @click="nextExamNum()">下一题</el-button>
          <el-button class="left" type="primary" @click="upExamNum()">上一题</el-button>
        </div>
      </div>
      <div>
        <div style="display: block">

          <div class="home_right">
            <SelectArray v-model:examChild="examChild">
            </SelectArray>
          </div>
        </div>
        <!--        <div style="display: block">-->
        <!--          <div>-->
        <!--            <h1>多选题</h1>-->
        <!--          </div>-->
        <!--          <div class="home_right">-->
        <!--            <SelectArray v-model:examChild="examChild">-->
        <!--            </SelectArray>-->
        <!--          </div>-->
        <!--        </div>-->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, onUpdated, provide, reactive, ref, watch} from "vue";
import {examMapArray} from "@/ts/examClass/operate";
import {updateCssAscolor, updateLine} from '@/js/domJS/HomeView'
import SelectArray from "./selectArray"
import store from "@/store";
import {getExamAxios} from "@/js/netJs/aExamAxios"

let examChild = ref(1)
// 倒计时插件
// let targetDate = new Date().getTime()+10000;

// 倒计时
// function countdown() {
//   // let targetDate = new Date("April 28, 2023 00:26:00").getTime();
//   let currentDate = new Date().getTime();
//   let timeRemaining = Number(localStorage.getItem("targetDate")) - currentDate;
//   if (timeRemaining <= 0) {
//     alert("结束考试 强制退出 ")
//     return
//   }
//   let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
//   let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
//
//   document.getElementById("countdown")!.innerHTML = hours + ":" + minutes + ":" + seconds + "";
// }


provide('examChild', examChild);
let examArray = reactive(JSON.parse(localStorage.getItem("examList")!))
// let examArray = reactive(examMapArray)
let topicContent = ref(examArray[store.state.examNum-1]!.topic)
let selectArrayReactive = reactive({arr: examArray[store.state.examNum-1]!.selectArray})

function nextExamNum(): void {
  store.commit("addExamNum")
  selectArrayReactive = reactive({arr: examArray[store.state.examNum-1]!.selectArray})
  console.log("下一题调试")
  console.log(examArray)
  topicContent = ref(examArray[store.state.examNum-1]!.topic)
}

// 上一题
function upExamNum() {
  store.commit("minusExamNum")
  if (store.state.examNum == 0) {
    nextExamNum()
    return
  }
  selectArrayReactive = reactive({arr: examArray[store.state.examNum-1]!.selectArray})
  topicContent = ref(examArray[store.state.examNum-1]!.topic)
}

function updateSelectColor() {

  console.log(selectArrayReactive)
  for (let i = 0; i < selectArrayReactive.arr.length; i++) {
    let elementsByClassName = document.querySelector(".select" + (i + 1));
    console.log("打印类型")
    console.log(elementsByClassName)
    updateLine(elementsByClassName, selectArrayReactive.arr.length)
    if (selectArrayReactive.arr[i].ifClick) {
      updateCssAscolor(elementsByClassName, 1)
    } else {
      updateCssAscolor(elementsByClassName, 0)
    }
  }
}


// 监听当前是第几题
watch(examChild, (newValue, oldValue) => {
  store.commit("addValue", examChild)
  selectArrayReactive = reactive({arr: examArray[store.state.examNum-1]!.selectArray})
  topicContent = ref(examArray[store.state.examNum-1]!.topic)
})

//更新右边1000个div的背景颜色
function selectArrayUpdateColor(num: any) {
  let elementsByClassName = document.getElementsByClassName("selectArrayClass" + num);
  for (let i = 0; i < selectArrayReactive.arr.length; i++) {
    if (selectArrayReactive.arr[i].ifClick == true) {
      updateCssAscolor(elementsByClassName[0], 1)
      console.log("没错")
      return
    }
  }
  console.log("变为0")
  updateCssAscolor(elementsByClassName[0], 0)
}

// watch(selectArrayReactive,(newValue,oldValue)=>{
//   // for(let i of examArray.values()){
//   //   selectArrayUpdateColor(i.titleNumber)
//   // }
//   console.log(selectArrayReactive)
//   selectArrayUpdateColor(store.state.examNum)
// })

// 点击选择事件
function selected(index: number, n: any): void {
  //如果点击时候是已经被选择了就把是否选中属性变为false
  if (selectArrayReactive.arr[index].ifClick == true) {
    //修改是否选中
    selectArrayReactive.arr[index].ifClick = false
    localStorage.setItem("examList",JSON.stringify(examArray));
    //获取class类名
    let selectJH: string = "select" + (index + 1)
    let selectDocument = document.getElementsByClassName(selectJH)
    //更新为黑色
    updateCssAscolor(selectDocument[0], 0)
    selectArrayUpdateColor(store.state.examNum)
    return
  }
// 同上
  if (selectArrayReactive.arr[index].ifClick == false) {
    selectArrayReactive.arr[index].ifClick = true
    localStorage.setItem("examList",JSON.stringify(examArray));
    let selectJH: string = "select" + (index + 1)
    let selectDocument = document.getElementsByClassName(selectJH)
    updateCssAscolor(selectDocument[0], 1)
  }
  selectArrayUpdateColor(store.state.examNum)
}

onMounted(() => {
  updateSelectColor();
  setUpSelectArrayColor();
  // countdown();
  // setInterval(countdown, 1000);
})
onUpdated(() => {
  updateSelectColor()
})
// 刷新时候更新右边的div背景颜色
//更新右边1000个div的背景颜色
function setUpSelectArrayUpdateColor(num: any) {
  let elementsByClassName = document.querySelectorAll(".selectArrayClass" + num)[0];
  for (let i = 0; i < examArray[num-1]!.selectArray.length; i++) {
    if (examArray[num-1]!.selectArray[i].ifClick) {
      console.log(elementsByClassName)
      updateCssAscolor(elementsByClassName, 1)
      return
    }
  }
  updateCssAscolor(elementsByClassName, 0)
}

function setUpSelectArrayColor() {
  for (let i = 1; i <= examArray.length; i++) {
    setUpSelectArrayUpdateColor(i)
    console.log(i)
  }
}
</script>

<style scoped lang="scss">
.top {
  background-color: #42b983;
  height: 50px;

  div {
    text-align: center;
    font-size: 20px;
  }
}

.home {

  margin-top: 20px;
  height: 600px;
  padding: 10px;
  width: 1000px;
  background-color: #f9f9fb;
  position: relative;

  .topic {
    height: 200px;

    background-color: white;
    display: flex;
    border-bottom: 1px solid black;

    .topicNumber {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: #498cf0;
      color: white;
      font-size: 25px;
    }

    .content {
      width: 1000px;
      font-size: 25px;
      word-wrap: break-word;
      word-break: normal;
    }
  }

  .select {
    margin-top: 10px;
    height: 300px;

    width: 1000px;
    background-color: white;
    display: flex;

    flex-direction: column; // 竖向排列
    justify-content: center;

    div {
      flex: 1;
    }

    .selectA {
      margin-top: 5px;
      flex: 1;
      background-color: #42b983;
    }
  }

  .button {
    width: 1000px;
    height: 30px;
    position: absolute;
    bottom: 20px;

    .left {
      position: absolute;
      left: 10px;
    }

    .right {
      position: absolute;
      right: 20px;
    }
  }
}

.home_right {
  ::-webkit-scrollbar {
    display: none;
  }

  overflow-y: scroll;
  display: block;
  margin-top: 20px;
  margin-left: 40px;
  width: 400px;
  height: 600px;
  background-color: white;

}

.selectTrue {
  background-color: burlywood;
}
</style>