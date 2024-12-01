import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/HomePage.vue'
import Day1 from '../views/Day1.vue'
import Day2 from '../views/Day2.vue'
import Day3 from '../views/Day3.vue'
import Day4 from '../views/Day4.vue'
import Day5 from '../views/Day5.vue'
import Day6 from '../views/Day6.vue'
import Day7 from '../views/Day7.vue'
import Day8 from '../views/Day8.vue'
import Day9 from '../views/Day9.vue'
import Day10 from '../views/Day10.vue'
import Day11 from '../views/Day11.vue'
import Day12 from '../views/Day12.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
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
  },
  {
    path: '/day3',
    name: 'day3',
    component: Day3
  },
  {
    path: '/day4',
    name: 'day4',
    component: Day4
  },
  {
    path: '/day5',
    name: 'day5',
    component: Day5
  },
  {
    path: '/day6',
    name: 'day6',
    component: Day6
  },
  {
    path: '/day7',
    name: 'day7',
    component: Day7
  },
  {
    path: '/day8',
    name: 'day8',
    component: Day8
  },
  {
    path: '/day9',
    name: 'day9',
    component: Day9
  },
  {
    path: '/day10',
    name: 'day10',
    component: Day10
  },
  {
    path: '/day11',
    name: 'day11',
    component: Day11
  },
  {
    path: '/day12',
    name: 'day12',
    component: Day12
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

export default new VueRouter({
  routes: routes,
  mode: 'history'
}) 