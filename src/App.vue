<template>
    <div id="app">
          <NavBar/>
          <router-view></router-view>
    </div>
</template>

<script>

import router from './router'
import NavBar from './components/NavBar.vue'



export default {
  name: 'App',
  router,
  components: {    
    NavBar
  }
}
</script>

<style lang="scss">
  @import './assets/main.scss';
</style>







