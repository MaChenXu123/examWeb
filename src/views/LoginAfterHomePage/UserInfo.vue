<template>
  <div style="font-size: 30px">
    用户名字:{{userName}}
  </div>
</template>

<script setup>

const userName=localStorage.getItem("userName")
console.log(userName)

</script>

<style scoped>

</style>