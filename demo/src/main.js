import Vue from 'vue'
import App from './App.vue'

import './styles/app.scss';
import './styles/demo-grid.css';

import "../node_modules/vue-prism-editor/dist/prismeditor.min.css"; // import the styles somewhere


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
