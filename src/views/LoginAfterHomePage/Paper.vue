<template>
  <div style="font-size: 30px">
    待考试卷
  </div>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="id" label="Id" width="180"/>
    <el-table-column prop="examName" label="试卷名称" width="180"/>
    <el-table-column prop="examTime" label="考试时间"/>
    <el-table-column fixed="right">
      <template #default="scope">
        <el-button
            size="small"
            type="primary"
            @click.prevent="Test(scope.$index)">
          点击开始考试
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <!--  <div class="PaperListClass" style="width: 600px; display: flex;flex-direction: row">-->
  <!--    <div><span>id</span></div>-->
  <!--    <div><span>试卷名</span></div>-->
  <!--    <div><span>考试时间</span></div>-->
  <!--    <div><span>开始考试</span></div>-->
  <!--  </div>-->
  <!--  <hr style="color: black;background-color: black;border-color: black">-->
</template>

<script setup>
import {getExamAxios, getPaperList} from "@/js/netJs/aExamAxios"
import {reactive} from "vue";
import {ElMessage, ElMessageBox} from 'element-plus'
import router from "@/router";
import { ElLoading } from 'element-plus'
let tableData = reactive([])
const getPaper = async () => {
  let axiosResponse = await getPaperList();
  for (let i = 0; i < axiosResponse.data.data.length; i++) {
    // axiosResponse.data.data[i].i
    let date = new Date(axiosResponse.data.data[i].examTime);
    // 使用 Date 对象的方法获取常见格式的时间字符串
    const localTime = date.toLocaleDateString() + " " + date.toLocaleTimeString();
    axiosResponse.data.data[i].examTime = localTime
    tableData[i] = axiosResponse.data.data[i];
  }
}

const Test = (index) => {
  open()
  let paperId = tableData[index].id

}
getPaper();
// 打开对话框
const open = () => {
  ElMessageBox.confirm(
      '开始考试将不能退出 你确定进入考试吗！',
      '提示',
      {
        confirmButtonText: '确定',
        cancelButtonText: '退出',
        type: 'warning',
      }
  )
      .then(() => {
// 获取数据
        const getExam = async () => {
          let resExam = await getExamAxios(1);
           localStorage.setItem("examList",JSON.stringify(resExam.data.data))
          const openFullScreen2 = () => {
            const loading = ElLoading.service({
              lock: true,
              text: 'Loading',
              background: 'rgba(0, 0, 0, 0.7)',
            })
            setTimeout(() => {
              loading.close()
              router.push("/examHome")
            }, 2000)
          }
          openFullScreen2()
        }
        getExam();
        let targetDate = new Date().getTime() + 100000;
        localStorage.setItem("targetDate", targetDate);

        ElMessage({
          type: 'success',
          message: '进入考试',
        })
      })
      .catch(() => {
        ElMessage({
          type: 'info',
          message: '已经取消',
        })
      })
}
console.log(tableData)
</script>

<style scoped lang="scss">
.PaperListClass {
  div {
    flex: 1;
  }
}

</style>