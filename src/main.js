// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // created: function(){
  //   var script = document.createElement('script');
  //   script.type = 'text/javascript';
  //   script.src = 'https://cdn.knightlab.com/libs/timeline3/latest/js/timeline.js';
  //   document.body.appendChild(script);
  // },
  router,
  template: '<App/>',
  components: { App }
})
