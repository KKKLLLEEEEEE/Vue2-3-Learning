<template>
  <div class="day5">
    自动获取焦点-自定义指令
    <input type="text" v-focus />
    <p v-color="'purple'">v-color test</p>
    <day5-base1>
      <template slot="header">header</template>
      <template slot="content">content</template>
      <template slot="footer">footer</template>
    </day5-base1>
    <br>
    <day5-base1>
    </day5-base1>
  </div>
</template>

<script>
import Day5Base1 from '@/components/day5-base1.vue'
export default {
  name: 'DayFivePage',
  components: {
    Day5Base1
  }
}
</script>

