<template>
   <div>
        <i class="fas fa-search"></i> <input class="search" type="text" placeholder="Search movies" 
         @input="emitInputChangeEvent"
         v-model="movie">
    </div>
</template>

<script>

export default {
  name: 'MovieSearch',

  data(){
      return{
          movie:''
      }
  },

    methods:{
        emitInputChangeEvent(){
            this.$emit('searchMovie',this.movie)
        }
    }
}

</script>

<style>

</style>