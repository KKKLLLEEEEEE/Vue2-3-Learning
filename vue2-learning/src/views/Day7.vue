<template>
  <div class="day7">
    <p>{{ $store.state.count }} from store</p>
    <p>{{ count }} from computed</p>
    <button @click="$store.commit('increment')">Increment</button>
    <button @click="$store.commit('decrement')">Decrement</button>
    <br>
    <br>
    <input type="number" v-model.number="amount">
    <br>
    <button @click="$store.commit('incrementWithAmount', amount)">Increment with amount</button>
    <button @click="$store.commit('decrementWithAmount', amount)">Decrement with amount</button>
    <br>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <br>
    <br>
    <input type="number" v-model.number="asyncAmount">
    <br>
    <button @click="incrementAsync(asyncAmount)">Async increment</button>
    <button @click="decrementAsync(asyncAmount)">Async decrement</button>
    <br>
    <br>
    <p>{{ $store.state.list }} original list</p>
    <p>{{ $store.getters.filteredList }} filtered list</p>
    <input type="number" v-model.number="item">
    <br>
    <button @click="addItem(item)">Add item</button>
    <button @click="removeItem(item)">Remove item</button>
    <br>
    <br>
    <p>{{ name }} from user module</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'
export default {
  name: 'DaySevenPage',
  computed: {
    ...mapState(['count']),
    ...mapState('user', ['name', 'age'])
  },
  methods: {
    ...mapMutations(['increment', 'decrement', 'incrementWithAmount', 'decrementWithAmount', 'addItem', 'removeItem']),
    ...mapActions(['incrementAsync', 'decrementAsync'])
  },
  data() {
    return {
      amount: 0,
      asyncAmount: 0,
      item: 0
    }
  }
}
</script>
