import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import eventBus from './event-bus';

import '../sass/_main.scss';

import Timer from './components/common/Timer.vue'


Vue.config.productionTip = false

Vue.component('app-timer', Timer);

Vue.prototype.$eventBus = eventBus;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
