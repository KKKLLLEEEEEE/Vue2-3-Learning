<template>
    <div class="day4-base2">
      <p>Welcome to Day 4 base2</p>
      <p>{{ game }}</p>
      <button @click="changeGame">Change Game in day4.vue</button>
      <div class="inner" :style="{ width:w + '%' }"><span>{{ w }}%</span></div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DayFourPage-base2',
    data() {
      return {
        bestGame: 'Genshin Impact from day4-base2',
        changeGameName: 'Genshin Impact from day4-base2 but its been changed'
      }
    },
    props: {
      game: String,
      w: {
        type: Number,
        required: true,
        default: 50,
        validator(value) {
            return value >= 0 && value <= 100
        }
      }
    },
    methods: {
      changeGame() {
        this.$emit('changeGameNameEvent', this.changeGameName)
      }
    }
  }
  </script>

  <style scoped>
  div {
    border: 3px solid rgb(24, 227, 100);
    margin: 30px;
  }
  </style>
  