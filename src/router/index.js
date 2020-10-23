import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/layout'


Vue.use(Router)



export const constantRouterMap = [
  { path: '/login', component: () => import('@/components/login') },
  { path: '/404', component: () => import('@/components/404') },
  {
    path: '/',
    component: layout,
    redirect: '/home',
    name: 'home',
    children: [{
      path: 'home',//首页展示
      component: () => import('@/components/HelloWorld')
    },{
      path:'one',
      component: () => import('@/components/one')
    },{
      path:'two',
      component: () => import('@/components/two')
    }
  ]
  }
]

export const asyncRouterMap = [
  
  { path: '*', redirect: '/404', hidden: true }
]
export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})