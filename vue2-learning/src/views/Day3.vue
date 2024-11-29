<template>
  <div>
    <button ref="testUpdate" @click=count++>点击测试钩子函数： {{ count }}</button>
  </div>
</template>

<script>
export default {
  name: 'DayThreeStudy',
  
  beforeCreate() {
    console.log('beforeCreate' , this.count);
  },
  created() {
    console.log('created' , this.count); 
  },
  beforeMount() {
    console.log('beforeMount' , this.count);
  },
  mounted() {
    console.log('mounted' , this.count);
  },
  beforeUpdate() {
    console.log('beforeUpdate' , this.count,this.$refs.testUpdate.textContent);
  },
  updated() {
    console.log('updated' , this.count,this.count,this.$refs.testUpdate.textContent);
  },
  beforeDestroy() {
    console.log('beforeDestroy' , this.count);
  },
  destroyed() {
    console.log('destroyed' , this.count);
  },
  data() {
    return {
      game: 'football',
      count: 0
    }
  },
  methods: {
    destroy() {
      this.count++;
    }
  }
  
}


</script>

<style scoped>
</style> 