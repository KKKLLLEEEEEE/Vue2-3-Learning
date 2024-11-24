<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="nav-buttons">
      <button @click="goToDay1">第一天学习</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    goToDay1() {
      this.$router.push('/day1')
    }
  }
}
</script>

<style scoped>
.nav-buttons {
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 10px;
}

button:hover {
  background-color: #3aa876;
}
</style>
