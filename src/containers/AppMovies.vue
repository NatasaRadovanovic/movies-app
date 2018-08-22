<template>
  <div>
  <Movie-search @searchMovie="searchMovie"/>
  <h3>Selected: {{ counterOfSelectedMovie.length }}</h3>
   <Movie-row v-for="movie in filterMovies" :key="movie.id" 
   :movie="movie"
   @selectMovie="selectMovie"
   :isSelected="isSelected"/>
   <h4 class="search-message" v-if="filterMovies.length === 0">{{ errorMessage }}</h4>
   <button @click="selectAll">Select All</button>
   <button @click="deselectAll">Deselect All</button>
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
     title:"",
     errorMessage:'There is no match!',
     counterOfSelectedMovie:[],
     isSelected:false
     
   }
 },

 computed:{
   filterMovies(){
     return this.movies.filter((movie)=>{
      return movie.title.toLowerCase().includes(this.title.toLowerCase())
     })
   }
 },
methods:{
  searchMovie(title){
  this.title = title 
  },

  selectMovie(movie){
    this.counterOfSelectedMovie.push(movie);
   
  },

  selectAll(){
    this.isSelected=true;
    this.movies.map(movie=> this.counterOfSelectedMovie.push(movie));
  },

  deselectAll(){
    this.isSelected=false;
    this.counterOfSelectedMovie=[];
  },

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
  .search-message{
    color:red;
    margin-left:550px;
  }
</style>
