import Vue from 'vue'
import App from './App.vue'
import Main from './Main.vue'
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import VueRouter from 'vue-router';

const router = new VueRouter({
  routes: [
    {
      path: '/', component: App
    }
  ]
})

Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.use(Buefy, {
  defaultIconPack: 'fa'
});

new Vue({
  render: h => h(Main),
  router
}).$mount('#app')
