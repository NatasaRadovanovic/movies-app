<template>
  <div>
    <div class="button-many">
      <button type="button" class="btn btn-light" 
       @click="byName('asc')">Sort by Name<i class="fas fa-sort-up"></i></button>
      <button type="button" class="btn btn-light" 
       @click="byName('desc')">Sort by Name<i class="fas fa-sort-down"></i></button>
      <button type="button" class="btn btn-light" 
       @click="byDuration('asc')">Sort by Duration<i class="fas fa-sort-up"></i></button>
      <button type="button" class="btn btn-light" 
       @click="byDuration('desc')" >Sort by Duration<i class="fas fa-sort-down"></i></button>
      <button type="button" class="btn btn-success btn-sm"
       @click="selectAll">Select All</button>
      <button type="button" class="btn btn-danger btn-sm" 
       @click="deselectAll">Deselect All</button>
      <strong>Selected: {{ counterOfSelectedMovie.length }}</strong>
    </div>
    <Movie-search @searchMovie="searchMovie"/>
    <h5 class="search-message" v-if="filterMovies.length === 0">{{ errorMessage }}</h5>
    <Movie-row v-for="movie in filterMovies" :key="movie.id" 
    :movie="movie"
    @selectMovie="selectMovie"
    :isSelected="isSelected"/>

     <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item">
                    <button class="page-link"  @click="prevPage" :disabled="pageNumber <= 0">Previous</button>
                </li>
                <li class="page-item active"><button class="page-link">{{ pageNumber }}</button></li>
                <li class="page-item">
                    <button class="page-link"  @click="nextPage" :disabled="pageNumber >= pageCount">Next</button>
                </li>
            </ul>
        </nav>
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
     isSelected:false,
     pageNumber:0,
     size:5
    }
 },

 computed:{
   filterMovies(){
    let filteredMovies = this.movies.filter(movie => movie.title.toLowerCase().indexOf(this.title.toLowerCase()) >= 0)
    console.log(filteredMovies);
    
     const start = this.pageNumber * this.size
     const end = start + this.size;
     let f = filteredMovies.slice(start, end);
     return f
   },

   pageCount(){
      let l = this.movies.length,
          s = this.size;
      return Math.floor(l/s);
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
    this.counterOfSelectedMovie=[];
    this.movies.map(movie=> this.counterOfSelectedMovie.push(movie));
  },

  deselectAll(){
    this.isSelected=false;
    this.counterOfSelectedMovie=[];
  },
  
  byName(sorted){
    let index = sorted === 'asc' ? 1 : -1;
    console.log(index);
    this.movies.sort((a,b)=>{
   return a.title >= b.title ? index : index * -1
  })
},

byDuration(sorted){
  let index = sorted === 'asc' ? 1 : -1;
  this.movies.sort((a,b)=>{
   return a.releaseDate >= b.releaseDate ? index : index * -1
  })
},
nextPage(){
         this.pageNumber++;
 },
 
 prevPage(){
        this.pageNumber--;
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
  .search-message{
    color:red;
    margin-left:550px;
  }

  .button-many{
    padding:10px;
    width:60%;
    margin:0 auto;
  }

  .button-many button{
    margin-right:5px;
  }
</style>
