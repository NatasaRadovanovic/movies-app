<template>
   <div><br>
    <div id="list-of-movie" :class="{'selectedBackground': isSelected }">
        <router-link  class="btn btn-link" :to="{name:'single-movie', params: {id:movie.id}}">
        <h2>{{ movie.title }}</h2> </router-link>
        <div><strong>Director:</strong> {{ movie.director }}</div>
        <div><strong>URl:</strong><img :src="movie.imageUrl" alt="Image"></div>
        <div><strong>Relase Date:</strong> {{ movie.releaseDate }}</div>
        <div><strong>Genre:</strong> {{ movie.genre }}</div><br>
        <button type="button" class="btn btn-info btn-sm" 
        @click.once="selected">Select</button>
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
      },
      isSelected:{
          type:Boolean
      }
  },

  methods:{
    selected(){
        
       return this.$emit('selectMovie',this.movie)
    }
  }
}
</script>

<style>
#list-of-movie{
    width:30%;
    margin:0 auto;
}

.selectedBackground{
    background-color:silver;
}
</style>