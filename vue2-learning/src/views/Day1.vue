<template>
  <div class="day1">
    <h1>Vue.js 第一天学习</h1>
    <button @click="$router.push('/')">返回首页</button>
  </div>
</template>

<script>
export default {
  name: 'DayOneStudy'
}
</script>

<style scoped>
.day1 {
  padding: 20px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 10px 0;
}

button:hover {
  background-color: #3aa876;
}
</style> 