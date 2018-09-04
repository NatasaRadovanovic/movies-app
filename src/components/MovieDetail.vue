<template>
  <div>
    <div>
        <h2>{{ movie.title }}</h2>
        <div><strong>Director:</strong> {{ movie.director }}</div>
        <div><strong>URl:</strong><img :src="movie.imageUrl" alt="Image"></div>
        <div><strong>Relase Date:</strong> {{ movie.releaseDate }}</div>
        <div><strong>Genre:</strong> {{ movie.genre }}</div><br>
    </div>    
  </div>
</template>

<script>

import { movies } from '../service/Movies'

export default {
  data(){
      return{
          movie:{}
      }
  },

 beforeRouteEnter (to, from, next) { 
      movies.get(to.params.id)
      .then(function(response){
       next(vm => {
         vm.movie = response.data
         console.log(vm.movie)
          }) 
      })
      .catch(err => console.log(err))
    },
  
}
</script>

<style>

</style>
