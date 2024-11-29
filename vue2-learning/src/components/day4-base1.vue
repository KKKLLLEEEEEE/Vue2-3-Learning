<template>
    <div class="day4-base1">
      <p>Welcome to Day 4 base1</p>
      <button @click="count++">Click {{ count }}</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DayFourPage-base1',
    data() {
    return {
      count: 0,
      bestGame: 'Genshin Impact from day4-base1'
    }
  }
    
  }
  </script>

<style scoped>
div {
  border: 3px solid rgb(227, 24, 24);
  margin: 30px;
}
</style>
  