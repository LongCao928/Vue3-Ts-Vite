<script setup lang="ts">
  import { useCounterStore } from '@/stores/counter'
  import { storeToRefs } from 'pinia';

  const store = useCounterStore()
  const { count, doubleCount } = storeToRefs(store)
  console.log(count.value, doubleCount.value)

  const { increment } = store
  increment()
  console.log(count.value)

</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
