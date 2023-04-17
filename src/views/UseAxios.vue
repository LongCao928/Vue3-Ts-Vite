
<template>
  <template v-if="data.resData.length">
    <div class="wrap-json" v-for="item in data.resData"
      :key="item.id">
      <span>{{ item.id }}</span>.
      <span>姓名：{{ item.name }} ，</span> 
      <span>邮箱：{{ item.email }}</span>
  </div>
  </template>
  <template v-else>
    <div>{{ data.resPostData.id }} - {{ data.resPostData.title }}</div>
  </template>
</template>

<script setup lang="ts">
import { onMounted, reactive, nextTick } from 'vue'
import AxiosServer from '@/servers/useAxios'

const data = reactive({
  resData: [] as Array<TAny>,
  resPostData: {} as TAnyType
})

onMounted(async () => {
  // let res = await AxiosServer.getUserInfo(1)
  // data.resData = res.data
  let res = await AxiosServer.setUserInfo({
    title: 'foo',
    body: 'bar',
    userId: 1,
  })
  console.log(res)
  data.resPostData = res.data
  nextTick(() => {
    console.log('nextTick')
  })
})

</script>

<style lang="scss" scoped>
 
</style>
