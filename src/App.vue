<template>
  <div>
      <NavBar :isAuthenticated="isAuthenticated" 
              @userAuthenticated="toggleAuthenticated"/>
      <router-view @userAuthenticated="toggleAuthenticated"/>
  </div>
</template>

<script>

import NavBar from './components/NavBar'
import { authService } from './service/Auth';

export default {
  name: 'app',
   components: {
    NavBar
  },
  data(){
    return {
      isAuthenticated: authService.isAuthenticated()
    }
  },
 
  methods: {
    toggleAuthenticated(value){
      this.isAuthenticated = value
      console.log(this.isAuthenticated)
      
    }
  }
}
</script>

<style>

</style>
