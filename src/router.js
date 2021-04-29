
import Vue from 'vue'
import Router from 'vue-router'
import Home from './Pages/Home.vue'
import Tienda from './Pages/Tienda.vue'
import GaleriaPages from './Pages/GaleriaPages.vue'
import Nosotros from './Pages/Nosotros.vue'


Vue.use(Router)

const routes = [
    { path: '/', name: 'Home', component: Home, props: true },
    { path: '/tienda', name: 'Tienda', component: Tienda, props: true },
    { path: '/galeria', name: 'GaleriaPages', component: GaleriaPages, props: true },
    { path: '/nosotros', name: 'Nosotros', component: Nosotros, props: true },

]

export default new Router({
  routes
})