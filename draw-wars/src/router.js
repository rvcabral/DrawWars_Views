import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/entry/Home';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/join',
      name: 'join',
      props: true,
      component: () => import(/* webpackChunkName: "join" */ './components/entry/Join.vue')
    },
    {
      path: '/war',
      name: 'war',
      props: true,
      component: () => import(/* webpackChunkName: "join" */ './components/wars/Wars.vue')
    }
  ]
})
