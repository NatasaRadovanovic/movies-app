<template>
   <div>
       <h1 style="text-align:center" >Add Movie</h1>
    <form class="formWrapp" @submit.prevent="onSubmit">
        <div class="form-group">
            <label for="title">Title</label>
            <input  autofocus name="title" type="text" class="form-control" id="title" aria-describedby="emailHelp" 
            placeholder="Title" v-model="movie.title">
         </div>
         <div class="form-group">
            <label for="director">Director</label>
            <input  name="director" type="text" class="form-control" id="director" placeholder="Director"
            v-model="movie.director">
         </div>
          <div class="form-group">
            <label for="image_url">Image Url</label>
            <input name="imageUrl" type="image_url" class="form-control" id="image_url" placeholder="image_url"
            v-model="movie.imageUrl">
         </div>
         <div class="form-group">
            <label for="duration">Duration</label>
            <input name="duration" type="number" class="form-control" id="duration" placeholder="duration"
            v-model="movie.duration">
         </div>
         <div class="form-group">
            <label for="release_date">Release Date</label>
            <input name="releaseDate" type="text" class="form-control" id="release_date"
             placeholder="release_date" v-model="movie.releaseDate">
         </div>
         <div class="form-group">
            <label for="genre">Genre</label>
            <input name="genre" type="text" class="form-control" id="genre" placeholder="genre"
            v-model="movie.genre">
         </div>
         <button type="submit" class="btn btn-danger">Submit</button>

       
    
  </form>
    </div>
</template>

<script>

export default {
  name: 'FormMovie',
  props:{
      movie:Object
  },

  methods:{
    onSubmit(){
      this.$emit('onSubmit')
    },
  }
}
</script>

<style>
    .formWrapp{
        width:50%;
        margin:0 auto;
    }
</style>

