<template>
  <div class="row"> 
      <div class="col-6">
          <b-table striped hover :items="items" :fields="fields"></b-table>
      </div>
      <div class="col-6">
          <h1 class="text-center">Prueba</h1>

          <div class="row">
      <div class="col-6"><h2>texto de prueba</h2></div>
      <div class="col-6"><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste expedita iure eveniet doloremque inventore aliquam nemo. Eum saepe dicta placeat quod dignissimos quo magni assumenda labore, ab eius eligendi vel.</p></div>
          </div>
      </div>
  </div>
  
  
</template>

<script>
  export default {
      name: 'Nuevo',
    data() {
      return {
        // Note `isActive` is left out and will not appear in the rendered table
        fields: ['first_name', 'last_name', 'age'],
        items: [
          { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
      }
    }
  }
</script>