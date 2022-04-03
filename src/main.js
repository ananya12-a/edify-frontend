import Vue from 'vue' 
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Donut from 'vue-css-donut-chart';
import 'vue-css-donut-chart/dist/vcdonut.css';
import router from './router'
import VueYouTubeEmbed from 'vue-youtube-embed'

Vue.use(VueYouTubeEmbed)
Vue.use(VueYouTubeEmbed, { global: true })

Vue.use(Donut);

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
