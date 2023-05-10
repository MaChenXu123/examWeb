<template>
  <div style="font-size: 10px">{{ time }}</div>
</template>

<script setup>
import {ref, onMounted} from 'vue'

const time = ref('00:00:00')

const countDown = () => {
  let now = new Date().getTime()
  let end = new Date('2023-05-01').getTime()
  let leftTime = end - now

  let days = parseInt(leftTime / 1000 / 60 / 60 / 24, 10)
  let hours = parseInt((leftTime / 1000 / 60 / 60) % 24, 10)
  let minutes = parseInt((leftTime / 1000 / 60) % 60, 10)
  let seconds = parseInt((leftTime / 1000) % 60, 10)

  // 格式化输出
  days = days > 9 ? days : `0${days}`
  hours = hours > 9 ? hours : `0${hours}`
  minutes = minutes > 9 ? minutes : `0${minutes}`
  seconds = seconds > 9 ? seconds : `0${seconds}`

  time.value = `${days} 天 ${hours} 小时 ${minutes} 分钟 ${seconds} 秒`
}

onMounted(() => {
  setInterval(countDown, 1000)
})

</script>
