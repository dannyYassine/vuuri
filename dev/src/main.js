import { createApp } from 'vue'
import App from './App.vue'
import Main from './Main.vue'
import Oruga from '@oruga-ui/oruga-next';
import { bulmaConfig } from '@oruga-ui/theme-bulma'
import '@oruga-ui/theme-bulma/dist/bulma.css'
import { createRouter, createMemoryHistory } from 'vue-router';

const router = new createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/', component: App,
      path: '/', component: App,
    }
  ]
});

const app = createApp(Main);
app.use(router);
app.use(Oruga, bulmaConfig);
app.mount('#app');