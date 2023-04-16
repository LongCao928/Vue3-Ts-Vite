<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
</script>

<template>
  <!-- <div class="user">
    <span>user</span>
  </div> -->
    <el-card class="card">
      <template #header>User</template>
      <el-text size="large" type="primary">This is content...</el-text>
      <el-input v-model="value"></el-input>
    </el-card>
</template>

<style lang="scss" scoped>
  .user {
    font-size: 20px;
    position: relative;
    span {
      position: absolute;
      float: left;
      left: 0;
      top: 0;
    }
  }
  .card {
    width: 200px;
  }
</style>