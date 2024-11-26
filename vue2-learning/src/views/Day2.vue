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
      <br>
      <input type="text" v-model="text">
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
      num2: 0,
      text: 'hello'
    }
  },
  watch: {
    text(newVal, oldVal) {
      console.log(newVal, oldVal);
    }
  },
  computed: {
    sum: {
      
        get() {
            return Number(this.num1) + Number(this.num2);
        },
        set(value) {
            this.num1 = value;
            this.num2 = value;
        }       
    
    }
  },
  methods: {
    changeNum() {
       //how to change sum:sum2:set
       this.sum=999;
    }
  }
  
  
}
</script> 