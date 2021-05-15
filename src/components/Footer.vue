<template>
    <div class="container-fluid main-footer">
        <div class="row footer-bottom">
            <div class="col-12">                
                <div class="row">
                    <div class="col-4">
                        <h6>Menu</h6>
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
        <li class="nav-item ml-3">
          <router-link :to="{ name: 'Blog' }">         
            <span>Blog</span>
          </router-link>
        </li>  
                    </div>
                    <div class="col-4">
                         <h4>Siguenos</h4>   
                    </div>
                    <div class="col-4">
                        <h4>Contacto</h4>
                            <li>Telefono</li>
                                <span>9xxxxxx</span>
                            <li>Correo</li>            
                                <span>dsadas@ventanillatatto.pe</span>
                            <li>Direccion</li>
                                <span>Calle 6 n dddsd 454</span>    
                    </div>  

                </div>

            </div>
            <span class="text-center">Ventanilla Tatto</span>
        </div>

    </div>
    
</template>

<script>


export default {
    name: 'Footer'        
    

}
</script>
