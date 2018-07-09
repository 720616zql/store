// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/index.css';
import MyAxios from '@/plugins/MyAxios';
import moment from 'moment';

Vue.config.productionTip = false;

// 格式化时间  全局过滤器 moment format
Vue.filter('fliDate', (shuju, timeString) => {
  return moment(shuju).format(timeString);
});

Vue.use(ElementUI);

Vue.use(MyAxios);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
