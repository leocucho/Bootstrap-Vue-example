
import Vue from 'vue'
import Router from 'vue-router'
import Home from './Pages/Home.vue'
import Tienda from './Pages/Tienda.vue'


Vue.use(Router)

const routes = [
    { path: '/', name: 'Home', component: Home, props: true },
    { path: '/tienda', name: 'Tienda', component: Tienda, props: true },

]

export default new Router({
  routes
})