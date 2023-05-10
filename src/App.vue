<template>

  <router-view/>
</template>


<script lang="ts" setup>
import { NMessageProvider, NDialogProvider } from "naive-ui";
// 引入上面你所定义的全局挂载组件
import GlobalContainer from "@/assets/Global.vue";
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
