<template>
  <div>
  <Movie-search @searchMovie="searchMovie"/>
   <Movie-row :movies="filterMovie"/>
  </div>
</template>

<script>

import MovieRow from '../components/MovieRow.vue'
import MovieSearch from '../components/MovieSearch.vue'
import { movies } from '../service/Movies'

export default {
  components: {
    MovieRow,
    MovieSearch,
  },

 data(){
   return{
     movies:[],
     title:""
   }
 },

 computed:{
   filterMovie(){
     return this.movies.filter(movie => movie.title.toLowerCase().indexOf(this.title) >= 0)
   }
 },
methods:{
  searchMovie(title){
    this.title = title
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
