import store from '@/store';
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

/****
 * isShow:true   不在菜单栏中显示
 * 
 * 
 */
const routes: RouteConfig[] = [
  {
    path: '/',
    redirect:'/home',
    meta:{title:'',isShow:true}
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta:{title:'Home'},
  },
  {
    path: '/about',
    name: 'About',
    meta:{title:'About'},
    component: () => import('../views/About.vue'),
  },
  {
    path: '/other',
    name: 'other',
    meta:{title:'other'},
    component:() =>import('../views/other.vue')
  },
  {
    path: '/homeChild',
    name: 'homeChild',
    meta:{title:'homeChild',isShow:true},
    component:() =>import('../views/homeChild')
  }
];
store.commit('changeDHData',routes)
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
