<template>
    <div>
        <form @submit.prevent="onSubmit">
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                 placeholder="Enter email" name="email" v-model="email">
                 <span class="alert alert-warning">{{ errors.error }}</span>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
                v-model="password" name="password">
                <span class="alert alert-warning">{{ errors.error }}</span>  
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
        </form>
    </div>
</template>

<script>
  import { authService } from '../service/Auth'

  export default {
    data(){
        return {
            email: '',
            password: '',
            errors:''
        }
    },
    methods: {
        onSubmit(){
            authService.login(this.email, this.password)
                .then((response) => {
                    this.$emit('userAuthenticated', true)
                    this.$router.push('/movies')
                })
                .catch((err) => {
                this.errors = err.response.data
            })
        }
    }
}
</script>
