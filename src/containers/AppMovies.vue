<template>
  <div>
   <Movie-row :movies="movies"/>
  </div>
</template>

<script>

import MovieRow from '../components/MovieRow.vue'
import { movies } from '../service/Movies'

export default {
  components: {
    MovieRow,
  },

 data(){
   return{
     movies:[]
   }
 },
 beforeRouteEnter (to, from, next) { 
      movies.getAll().then(movies =>{
        next(vm => {
         vm.movies = movies
       }) 
    })
      .catch(err => console.log(err))
  },
}
</script>

<style>

</style>
