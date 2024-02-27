import { createApp } from 'vue'
import App from './App.vue'
import AddDeleteDemo from './components/AddDeleteDemo.vue'
import Main from './Main.vue'
import Oruga from '@oruga-ui/oruga-next';
import { bulmaConfig } from '@oruga-ui/theme-bulma'
import '@oruga-ui/theme-bulma/dist/bulma.css'
import { createRouter, createMemoryHistory } from 'vue-router';

window.__components__ = {};
const TestingPlugin = {
  install(app, options) {
    app.mixin({
      created() {
        const { name } = this.$options;
        if (!window[name]) {
          window.__components__[name] = this;
        }
      },
    });
}
};

const router = new createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/', component: App,
      path: '/e2e/crud', component: AddDeleteDemo
    }
  ]
});

const app = createApp(Main);
app.use(router);
app.use(TestingPlugin);
app.use(Oruga, bulmaConfig);
app.mount('#app');