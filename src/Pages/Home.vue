<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <img alt="Vue logo" src="../assets/logo.png">                    
                    <Galeria/>
                    <Artistas/>
                    <Nuevo/>
                    
            </div>

        </div>

    </div>
</template>

<script>



import Nuevo from '../components/Nuevo.vue'
import Galeria from '../components/Galeria.vue'
import Artistas from '../components/Artistas.vue'


export default {
  name: 'Home',  
  components: {        
    Nuevo,
    Galeria,
    Artistas
  }
}
</script>