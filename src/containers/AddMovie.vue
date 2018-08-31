<template>
  <div>
    <FormMovie  :movie='movie'
                @onSubmit='onSubmit' /> 
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
         movie:{}
     }
 },

 methods:{
    onSubmit(){
        movies.add(this.movie)
        .then(response => {
        this.$router.push('/movies')
      })
       .catch(err => console.log(err))
  },
 }
  
}
</script>

<style>

</style>
