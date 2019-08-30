import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import eventBus from './event-bus';
import { HubConnectionBuilder, LogLevel } from '@aspnet/signalr'

import '../sass/_main.scss';

/**
 * GLOBAL COMPONENTS
 */
import Timer from './components/common/Timer.vue'

Vue.component('app-timer', Timer);

/**
 * CONFIGS
 */

Vue.config.productionTip = false;

import VueChatScroll from 'vue-chat-scroll'
Vue.use(VueChatScroll)

/**
 * VUE INSTANCE HELPERS
 */
// .withUrl("http://localhost:5000/Server")

const connection = new HubConnectionBuilder()
.withUrl("http://52.211.139.236/DrawWars/Server")
.configureLogging(LogLevel.Information)
.build();

Vue.prototype.connection = connection;

Vue.prototype.$eventBus = eventBus;

new Vue({
  router,
  store,
  render: h => h(App),
  data: ({
    showCounter: false,
    timeout: 0,
    drawUrl: '',
    sessionId: '',
    scores: []
  })
}).$mount('#app')
