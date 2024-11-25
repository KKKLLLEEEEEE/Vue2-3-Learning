<template>
  <div>
    {{ message + message2.toUpperCase() }}
    <br>
    <button @click="count++">点击：{{ count }}</button>
    <p>{{ GenshinImpact.name }}</p>
    <p><a v-bind:href="link">Google1</a></p>
    <p v-html="link2"></p>
    <button v-on:click="count2++">v-on click++  {{ count2 }}</button>
    <button @click="count2--">v-on click--  {{ count2 }}</button>
    <br>
    <button @click="toShow">click to show or hide</button>
    <span v-show="showFlag">suprise!</span>
    <br>
    <button v-show="index>0" @click="index--">last number</button>
    <span>{{ nums[index]}}</span>
    <button v-show="index<6" @click="index++">next number</button>
    <br>
    <ul>
        <li v-for="(item,index) in nums" v-bind:key="index">item-{{ item }}, index-{{ index }}</li>
    </ul>
    <br>
    <input type="text" v-model="username">
    <input type="password" v-model="password">
    <br>
    <button @click="login">login</button>
    <button @click="clear">clear</button>
    


    
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
      index: 3,
      nums: [1,2,3,4,5,6],
      username: "",
      password: ""

    }
  },
  methods: {
    toShow() {
        this.showFlag = !this.showFlag
    },
    login() {
      console.log(this.username, this.password);
    },
    clear() {
      this.username = "";
      this.password = "";
    }
  }
}
</script> 