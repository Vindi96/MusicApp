// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import NavBar from './components/NavBar.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Track from './components/Track.vue'

Vue.config.productionTip = false
Vue.component('app-nav', NavBar)
Vue.use(VueRouter)

const routes = [
  {path: '/', component: Home},
  {path: '/about', component: About},
  {path: '/track', name: 'track', component: Track}
]
const router = new VueRouter(
  {
    routes,
    mode: 'history'
  }
)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
