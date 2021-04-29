<template>
    
  <b-navbar toggleable="lg" type="dark" variant="info" class="navbar-top">
    <b-navbar-brand href="#">Ventanilla Tatto</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-3">
        <li class="nav-item ml-3">
          <router-link :to="{ name: 'Home' }">            
            <span>Inicio</span>
          </router-link>
        </li>
        <li class="nav-item ml-3">
          <router-link :to="{ name: 'GaleriaPages' }">           
            <span>Galeria</span>
          </router-link>
        </li>
        <li class="nav-item ml-3">
          <router-link :to="{ name: 'Tienda' }">          
            <span>Tienda</span>
          </router-link>
        </li>
        <li class="nav-item ml-3">
          <router-link :to="{ name: 'Nosotros' }">         
            <span>Nosotros</span>
          </router-link>
        </li>        
      </b-navbar-nav>
      
      
      

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
        
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

</template>

<script>



export default {
  name: 'NavBar'
  
}
</script>

<style>