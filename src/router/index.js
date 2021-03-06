import Vue from 'vue';
import Router from 'vue-router';
import login from '@/views/login';
import home from '@/views/home';
import users from '@/views/users/users';

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: 'login',
      path: '/login',
      component: login
    },
    {
      name: 'home',
      path: '/',
      // redirect: { name: 'login' }
      component: home,
      // 子路由
      children: [
        {
          name: 'users',
          path: '/users',
          component: users
        }
      ]
    }
  ]
});
