<template>
    <div>
        <form @submit.prevent="onSubmit">
            <div class="form-group row">
                <label class="col-4 col-form-label" for="username">Username</label> 
                <div class="col-8">
                    <input id="username" name="username" placeholder="Enter your username"
                     type="text" class="form-control here" v-model="user.name">
                      <span class="alert alert-warning" v-if="errors.name">
                     {{ errors.name[0] }}</span>
                </div>
            </div>
              <div class="form-group row">
                <label class="col-4 col-form-label" for="email">Email</label> 
                <div class="col-8">
                    <input id="email" name="email" placeholder="Enter your email"
                     type="email" class="form-control here" v-model="user.email">
                     <span class="alert alert-warning" v-if="errors.email">
                     {{ errors.email[0] }}</span>
                </div>
            </div>
            <div class="form-group row">
                <label for="password" class="col-4 col-form-label">Password</label> 
                <div class="col-8">
                 <input id="password" name="password" placeholder="Enter your password" 
                 type="password" class="form-control here" v-model="user.password">
                  <span class="alert alert-warning" v-if="errors.password">
                     {{ errors.password[0] }}</span>
                </div>
                
                 <div class="col-8">
                 <input id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" 
                 type="password" class="form-control here" v-model="user.confirmPassword">
                </div>
               
            </div> 
            <div class="form-group row">
                <div class="offset-4 col-8">
        <button name="submit" type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
</form>
    </div>
</template>

<script>
  import { authService } from '../service/Auth'

  export default {
   data(){
       return{
           user:{},
           errors:[],
       }
   },
    methods: {
        onSubmit(){
            //console.log(this.user.password);
            //console.log(this.user.confirmPassword);

            if(this.user.password !== this.user.confirmPassword){
                return;
            }

            authService.register(this.user)
                .then((response) => {
                    
                    this.$router.push('/login')
                })
                .catch((err) => {
                this.errors = err.response.data.errors
            })
        }
    }
}
</script>
<style scoped>
    form{
        width:50%;
        margin:0 auto;
    }
</style>

