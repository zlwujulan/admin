// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);
/* eslint-disable no-new */



router.beforeEach((to, from, next) => {

  console.log(to.path, 'to')
  // console.log(from, 'from')
  let role = sessionStorage.getItem('role')

  if (role) {
    console.log('登陆过了')
    if (to.path === '/login') {
      console.log('进来了')
      next('/')
    } else{
      next()
    }
  } else {
    console.log('没有登录')
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }

  }
});

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
