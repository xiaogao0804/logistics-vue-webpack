import Vue from 'vue'
import Router from 'vue-router'
import ShouHuo from '../components/shouhuo/shouhuo'
import ChuHuo from '../components/chuhuo/chuhuo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/shouhuo',
      name: 'shouhuo',
      component: ShouHuo
    },
    {
      path: '/chuhuo',
      name: 'chuhuo',
      component:ChuHuo
    }
  ]
})