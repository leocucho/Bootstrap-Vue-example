<template>
  <div id="app">
        <NavBar/>
      <img alt="Vue logo" src="./assets/logo.png">
      <Nuevo/>
      <Galeria/>
    

  </div>
</template>

<script>

import NavBar from './components/NavBar.vue'
import Nuevo from './components/Nuevo.vue'
import Galeria from './components/Galeria.vue'

export default {
  name: 'App',
  components: {    
    NavBar,
    Nuevo,
    Galeria
  }
}
</script>




