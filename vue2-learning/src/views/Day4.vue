<template>
  <div class="day4">
    <h1>Day 4 here</h1>
    <div class="content-box">
      <Day4Base1></Day4Base1>
    </div>
    <div class="content-box">
      <Day4Base1></Day4Base1>
    </div>
    <div class="content-box">
      <Day4Base1></Day4Base1>
    </div>
    <div class="content-box">
      <Day4Base2 :game="bestGame" @changeGameNameEvent="changeGameName" :w="width"></Day4Base2>
    </div>

    <br>
    <div v-if="show" class="content-box">
      <input type="text" v-model="inputValue" ref="inputRef">
    </div>
    <div v-else class="content-box">
      <button @click="showInput">Show Input</button>
    </div>
  </div>
</template>

<script>
import Day4Base1 from '@/components/day4-base1.vue'
import Day4Base2 from '@/components/day4-base2.vue'

export default {
  name: 'DayFourPage',
  components: {
    Day4Base1,
    Day4Base2
  },
  data() {
    return {
      bestGame: 'Genshin Impact from day.vue',
      width: 66,
      show: false,
      inputValue: ''
    }
  },
  methods: {
    changeGameName(newGameName) {
      this.bestGame = newGameName
    },
    showInput() {
      this.show = true
      this.$nextTick(() => {
        this.$refs.inputRef.focus()
      })
    }
  }
  
}
</script>

<style scoped>
.content-box {
  border: 3px solid rgb(234, 29, 176);
  margin: 30px;
}
</style>
