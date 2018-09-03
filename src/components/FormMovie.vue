<template>
   <div>
       <h1 style="text-align:center" >Add Movie</h1>
    <form class="formWrapp" @submit.prevent="onSubmit">
        <div class="form-group">
            <label for="title">Title</label>
            <input  autofocus name="title" type="text" class="form-control" id="title" aria-describedby="emailHelp" 
            placeholder="Title" v-model="movie.title">
            <span class="alert alert-warning" v-if="errors.title">{{ errors.title[0] }}</span>
         </div>
         <div class="form-group">
            <label for="director">Director</label>
            <input  name="director" type="text" class="form-control" id="director" placeholder="Director"
            v-model="movie.director">
            <span class="alert alert-warning" v-if="errors.director">{{ errors.director[0] }}</span>
         </div>
          <div class="form-group">
            <label for="image_url">Image Url</label>
            <input name="imageUrl" type="image_url" class="form-control" id="image_url" placeholder="image_url"
            v-model="movie.imageUrl">
            <span class="alert alert-warning" v-if="errors.imageUrl">{{ errors.imageUrl[0] }}</span>
         </div>
         <div class="form-group">
            <label for="duration">Duration</label>
            <input name="duration" type="number" class="form-control" id="duration" placeholder="duration"
            v-model="movie.duration">
            <span class="alert alert-warning" v-if="errors.duration">{{ errors.duration[0] }}</span>
         </div>
         <div class="form-group">
            <label for="release_date">Release Date</label>
            <input name="releaseDate" type="text" class="form-control" id="release_date"
             placeholder="release_date" v-model="movie.releaseDate">
             <span class="alert alert-warning" v-if="errors.releaseDate">{{ errors.releaseDate[0] }}</span>
         </div>
         <div class="form-group">
            <label for="genre">Genre</label>
            <input name="genre" type="text" class="form-control" id="genre" placeholder="genre"
            v-model="movie.genre">
            <span class="alert alert-warning" v-if="errors.genre">{{ errors.genre[0] }}</span>
         </div>
         <button type="submit" class="btn btn-danger">Submit</button>

       
    
  </form>
    </div>
</template>

<script>

export default {
  name: 'FormMovie',
  props:{
      movie:Object,
      errors:Object
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

