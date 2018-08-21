<template>
  <div>
   <Movies :movies="movies"/>
  </div>
</template>

<script>

import Movies from '../components/Movies.vue'
import { movies } from '../service/Movies'

export default {
  components: {
    Movies,
  },

 data(){
   return{
     movies:[]
   }
 },
 beforeRouteEnter (to, from, next) { 
      movies.getAll().then(response =>{
       next(vm => {
         vm.movies = response.data
       }) 
      })
      .catch(err => console.log(err))
    },
}
</script>

<style>

</style>
