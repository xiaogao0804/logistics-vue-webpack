import Vue from 'vue'
import Router from 'vue-router'
import ShouHuo from '../components/shouhuo/shouhuo'
import ChuHuo from '../components/chuhuo/chuhuo'
import Dingdan from '../components/dingdan/dingdan'
import Pandian from '../components/pandian/pandian'
import Danzheng from '../components/danzheng/danzheng'

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
    },
    {
      path:'/dingdan',
      name:'dingdan',
      component:Dingdan
    },
    {
      path:'/pandian',
      name:'pandian',
      component:Pandian
    },
    {
      path:'/danzheng',
      name:'danzheng',
      component:Danzheng
    }
  ]
})
