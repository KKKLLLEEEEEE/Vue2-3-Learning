<template>
  <div class="day6">
    <router-link to="/">homepage</router-link>
    <br>
    <router-link :to="{ path: '/day6', query: { game: 'Genshin Impact' }}">Genshin Impact</router-link>
    <h1 > from field : {{ game }} </h1>
    <h1>from $route.query.args : {{ $route.query.game }} </h1>
  </div>
</template>

<script>
export default {
  name: 'DaySixPage',
  data() {
    return {
      game: ''
    }
  },
  created() {
    const game = this.$route.query.game;
    this.game = game;
  }
}
</script>

