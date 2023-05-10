<template>
  <div class="LoginAfterHomePageClass">
    <div class="HomeTop">
      <div></div>
    </div>
    <div class="LoginAfterHomePageClassHome">
      <div class="LoginAfterHomePageClassHomeLeft">
        <!--        <div >-->
        <!--          asd-->
        <!--        </div>-->
        <!--        <div>-->
        <!--          asd-->
        <!--        </div>-->
        <el-col :span="25">
          <el-menu
              default-active="1"
              class="el-menu-vertical-demo"
              background-color="rgba(73, 140, 240, 0.3)"
          >
            <router-link to="/userInfo">
              <el-menu-item index="1">
                <el-icon>
                </el-icon>
                <span>考生信息</span>
              </el-menu-item>
            </router-link>
            <router-link to="/paper">
              <el-menu-item index="2">
                <el-icon>
                </el-icon>
                <span>试卷中心</span>
              </el-menu-item>
            </router-link>

            <router-link to="/scores">
              <el-menu-item index="3">
                <el-icon>
                </el-icon>
                <span>成绩查询</span>
              </el-menu-item>
            </router-link>
          </el-menu>
        </el-col>

      </div>
      <div class="LoginAfterHomePageClassHomeRight">
        <!--          <UserInfo></UserInfo>-->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import UserInfo from "./LoginAfterHomePage/UserInfo";
</script>

<style scoped lang="scss">
@import "@/assets/global.scss";

.LoginAfterHomePageClass {
  background-color: #f9f9fb;
  height: 100vh;
  .HomeTop {
    width: 100%;
    height: 50px;
    background-color: $global_color;
  }

  .LoginAfterHomePageClassHome {

    width: 1000px;
    height: 600px;
    margin: auto;
    //margin-top: 20px;
    display: flex;
    background-color: white;

    .LoginAfterHomePageClassHomeLeft {
      flex: 1;
      background-color: white;
      //background-color: aqua;

      //div:hover{
      //  background-color: burlywood;
      //}
      //div{
      //  width: 100%;
      //  height:50px;
      //  background-color: white;
      //
      //}
    }

    .LoginAfterHomePageClassHomeRight {
      flex: 3;
    }
  }
}
</style>