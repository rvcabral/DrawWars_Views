import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import eventBus from './event-bus';

import '../sass/_main.scss';

import { HubConnectionBuilder, LogLevel } from '@aspnet/signalr'
/**
 * GLOBAL COMPONENTS
 */
import Timer from './components/common/Timer.vue'

Vue.component('app-timer', Timer);

/**
 * CONFIGS
 */

Vue.config.productionTip = false;

/**
 * VUE INSTANCE HELPERS
 */
//.withUrl("http://52.211.139.236/DrawWars/Server")
Vue.prototype.$eventBus = eventBus;
const connection = new HubConnectionBuilder()
.withUrl("http://localhost:5000/Server")
.configureLogging(LogLevel.Information)
.build();

Vue.prototype.$connection = connection;

new Vue({
  router,
  store,
  render: h => h(App),
  data: ({
    showCounter: false,
    timeout: 0,
    drawUrl: '',
    sessionId: ''
  })
}).$mount('#app')
