<template>
   <div><br>
    <div id="list-of-movie" :class="{'selectedBackground': isSelected }">
        <h1>{{ movie.title }}</h1>
        <div><strong>Director:</strong> {{ movie.director }}</div>
        <div><strong>URl:</strong> {{ movie.imageUrl }}</div>
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
  },
data(){
    return{
        isSelected:false
    }
},
  methods:{
    selected(){
        this.isSelected=true;
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
    background-color:green;
}
</style>