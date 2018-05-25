import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import GoodsList from '../pages/goodsList/goodsList'
import GoodsDetail from '../pages/goodsDetail/goodsDetail'
import UserCenter from '../pages/userCenter/userCenter'
import EditInfo from '../pages/editInfo/editInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/goodsList',
      name: 'goodsList',
      component: GoodsList
    },
    {
      path: '/goodsDetail',
      name: 'goodsDetail',
      component: GoodsDetail
    },
    {
      path: '/userCenter',
      name: 'userCenter',
      component: UserCenter
    },
    {
      path: '/editInfo',
      name: 'editInfo',
      component: EditInfo
    },
  ]
})
