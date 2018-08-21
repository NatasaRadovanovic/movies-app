<template>
   <div>
        <div v-for="movie in movies" :key="movie.id">
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
  name: 'Movies',
  props:{
      movies:Array
  }
}
</script>

<style>

</style>