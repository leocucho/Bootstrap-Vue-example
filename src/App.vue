<template>
    <div id="app">
          <NavBar/>
          <router-view></router-view>

          <Footer/>
    </div>
</template>

<script>

import router from './router'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'



export default {
  name: 'App',
  router,
  components: {    
    NavBar,
    Footer
  }
}
</script>

<style lang="scss">
  @import './assets/main.scss';
</style>







