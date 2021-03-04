import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/style/index.css'

Vue.use(Element)
Vue.config.productionTip = false;

//全局的路由守卫  和js的写法一样。
router.beforeEach((to: any, from: any, next: any) => {
  if (to.name === 'login') {
    next({name: 'home/index'})
  } else {
    next()
  }
})
//  组件内的路由守卫，如果要在组件内部使用理由监听，路由钩子beforeRouteEnter,beforeRouteLeave,beforeRouteUpdate不生效。所以在此注册；
// Component.registerHooks([
//   'beforeRouteEnter',//进入路由之前
//   'beforeRouteLeave',//离开路由之前
//   'beforeRouteUpdate'
// ])

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
