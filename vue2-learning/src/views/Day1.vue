<template>
  <div>
    {{ message + message2.toUpperCase() }}
    <br>
    <button @click="count++">点击：{{ count }}</button>
    <p>{{ GenshinImpact.name }}</p>
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
      }
    }
  }
}
</script> 