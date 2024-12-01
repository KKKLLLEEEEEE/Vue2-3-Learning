import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  } 
})

Vue.directive('color', {
  inserted: function (el, binding) {
    el.style.color = binding.value
  },
  update: function (el, binding) {
    el.style.color = binding.value
  }
})



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
