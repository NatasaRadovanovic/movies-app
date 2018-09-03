<template>
  <div>
    <FormMovie  :movie='movie'
                @onSubmit='onSubmit'
                :errors = 'errors' /> 
  </div>
</template>

<script>

import FormMovie from '../components/FormMovie.vue'
import { movies } from '../service/Movies'

export default {
  name: 'AddMovie',
  components: {
    FormMovie,
  },
 data(){
     return{
         movie:{},
         errors:{},
     }
 },

 methods:{
    onSubmit(){
        movies.add(this.movie)
        .then(response => {
        this.$router.push('/movies')
      })
       .catch(error => console.log(this.errors = error.response.data.errors))
  },
 }
  
}
</script>

<style>

</style>
