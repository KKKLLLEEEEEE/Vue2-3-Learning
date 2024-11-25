import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Day1 from '../views/Day1.vue'
import Day2 from '../views/Day2.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HelloWorld,
    props: { msg: 'Vue2 Learning Project' }
  },
  {
    path: '/day1',
    name: 'day1',
    component: Day1
  },
  {
    path: '/day2',
    name: 'day2',
    component: Day2
  }
]

export default new VueRouter({
  routes: routes
}) 