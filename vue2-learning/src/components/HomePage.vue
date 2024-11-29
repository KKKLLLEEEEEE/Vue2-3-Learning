<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <div class="nav-buttons">
      <button @click="$router.push('/day1')">Day 1</button>
      <button @click="$router.push('/day2')">Day 2</button>
      <button @click="$router.push('/day3')">Day 3</button>
      <button @click="$router.push('/day4')">Day 4</button>
      <button @click="$router.push('/day5')">Day 5</button>
      <button @click="$router.push('/day6')">Day 6</button>
      <button @click="$router.push('/day7')">Day 7</button>
      <button @click="$router.push('/day8')">Day 8</button>
      <button @click="$router.push('/day9')">Day 9</button>
      <button @click="$router.push('/day10')">Day 10</button>
      <button @click="$router.push('/day11')">Day 11</button>
      <button @click="$router.push('/day12')">Day 12</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
}

.nav-buttons {
  margin-top: 20px;
}

button {
  margin: 0 10px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
}
</style> 