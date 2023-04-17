
<template>
  <div>axios</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import AxiosServer from '@/servers/useAxios'

onMounted(() => {
  // let res = AxiosServer.getUserInfo('zhangsan')
  
  let res = AxiosServer.setUserInfo({name: 'lisi'})
  console.log(res)
})

</script>
