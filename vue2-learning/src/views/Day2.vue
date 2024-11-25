<template>
  <div>
    <div :class="{'box': true, 'color': true, 'margin': true}">
      <h1>Hello World</h1>
      <br>
      <input type="text" v-model="num1">
      +
      <input type="text" v-model="num2">
      =
      <span>{{ sum }}</span>
      <br>
      <button @click="changeNum">change num</button>
    </div>
  </div>
</template>

<style scoped>
.box {
  width: 100px;
  height: 100px;
}
.color {
  color: pink;
}
.margin {
  margin: 0 auto;
}
</style>

<script>
export default {
  name: 'DayTwoStudy',
  data() {
    return {
      num1: 0,
      num2: 0
    }
  },
  computed: {
    sum: {
      
        get() {
            return this.num1 + this.num2;
        },
        set(value) {
            this.num1 = 999;
            this.num2 = 999;
        }       
    
    }
  },
  methods: {
    changeNum() {
       //how to change sum:sum2:set
       this.sum=1;
    }
  }
  
  
}
</script> 