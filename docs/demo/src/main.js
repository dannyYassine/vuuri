import Vue from 'vue'
import App from './App.vue'

import '../../.vuepress/styles/app.scss';
import '../../.vuepress/styles/demo-grid.css';

import "vue-prism-editor/dist/prismeditor.min.css"; // import the styles somewhere


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
