import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user
    },
    state: {
        count: 100,
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    mutations: {
        increment(state) {
            state.count++
        },
        decrement(state) {
            state.count--
        },
        incrementWithAmount(state, amount) {
            state.count += amount
        },
        decrementWithAmount(state, amount) {
            state.count -= amount
        },
        addItem(state, item) {
            state.list.push(item)
        },
        removeItem(state, index) {
            state.list.splice(index, 1)
        }
    },
    actions: {
        incrementAsync(context, amount) {
            setTimeout(() => context.commit('incrementWithAmount', amount), 1000)
        },
        decrementAsync(context, amount) {
            setTimeout(() => context.commit('decrementWithAmount', amount), 1000)
        }
    },
    getters: {
        filteredList: (state) => {
            return state.list.filter(item => item > 5)
        }
    }
})

