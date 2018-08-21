<template>
   <div>
    <div class="card-body">
        <div>{{ movie.title }}</div>
        <div>{{ movie.director }}</div>
        <div>{{ movie.imageUrl }}</div>
        <div>{{ movie.releaseDate }}</div>
        <div>{{ movie.genre }}</div>
    </div>    
       
    </div>
</template>

<script>

export default {
  name: 'MovieRow',
  props:{
      movie:{
          type: Object,
          required:true
      }
  }
}
</script>

<style>

</style>