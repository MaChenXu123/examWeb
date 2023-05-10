<template>
  <n-space>
    <n-button @click="handleConfirm">
      警告
    </n-button>
  </n-space>
</template>

<script  lang="ts" setup>
import {h} from "vue"
import { ElMessage } from 'element-plus'
function handleConfirm(){
  ElMessage({
    message: h('p', null, [
      h('span', null, ' 当前是最后一题'),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
  })
}

</script>