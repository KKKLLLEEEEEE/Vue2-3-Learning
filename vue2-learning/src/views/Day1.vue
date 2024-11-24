<template>
  <div>
    {{ message + message2.toUpperCase() }}
    <br>
    <button @click="count++">点击：{{ count }}</button>
    <p>{{ GenshinImpact.name }}</p>
    <p><a :href="link">Google1</a></p>
    <p v-html="link2"></p>
    <button v-on:click="count2++">v-on click++  {{ count2 }}</button>
    <button @click="count2--">v-on click--  {{ count2 }}</button>
    <br>
    <button @click="toShow">click to show or hide</button>
    <span v-show="showFlag">suprise!</span>
    <br>
    <span v-bind:style="color">hide</span>

    
  </div>
</template>

<script>
export default {
  name: 'DayOneStudy',
  data() {
    return {
      message: 'Hello World!',
      message2: 'Hello Vue2!',
      count: 0,
      GenshinImpact:{
        name: '旅行者',
        age: 18,
        gender: '男'
      },
      link: 'http://www.google.com',
      link2: '<a href="http://www.google.com">Google2</a>',
      count2: 0,
      showFlag: false,
      hideFlag: true,
      color: 'red'
    }
  },
  methods: {
    toShow() {
        this.showFlag = !this.showFlag
    },
    calculate(num1,num2) {
        return num1 + num2
    }
  }
}
</script> 