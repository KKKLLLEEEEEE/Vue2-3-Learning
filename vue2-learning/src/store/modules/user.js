const state = {
    name: 'John',
    age: 30
}
const mutations = {
    setName(state, name) {
        state.name = name
    }
}
const actions = {
    setName(context, name) {
        setTimeout(() => context.commit('setName', name), 1000)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}