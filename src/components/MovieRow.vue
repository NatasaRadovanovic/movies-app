<template>
   <div>
    <div :class="{'red':active }">
        <div>{{ movie.title }}</div>
        <div>{{ movie.director }}</div>
        <div>{{ movie.imageUrl }}</div>
        <div>{{ movie.releaseDate }}</div>
        <div>{{ movie.genre }}</div>
        <button>Select</button>
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
  },

  data(){
      return{
        active:true
      }
  },

  methods:{
    
  }
}
</script>

<style>

</style>