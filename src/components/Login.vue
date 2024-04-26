<template>
<div class="container registration-container">
    <img class="logo" src="@/assets/logo.png" alt="Logo" height="100" width="100">
    <h1 class="text-center">User Login</h1>
    <div class="register">
        <div class="form-group row">
            <label for="email" class="col-sm-3 col-form-label">Email:</label>
            <div class="col-sm-9">
                <input type="email" class="form-control" id="email" placeholder="Enter Email" v-model="email" required>
            </div>
        </div>
        <div class="form-group row">
            <label for="password" class="col-sm-3 col-form-label">Password:</label>
            <div class="col-sm-9">
                <input type="password" class="form-control" id="password" placeholder="Enter Password" v-model="password" required>
            </div>
        </div>
        <div class="form-group row">
            <div class="col-sm-9 offset-sm-3">
                <button  @click="login()" class="btn btn-primary register-button">Login</button>
                <!-- <button  v-on:click="resetForm" class="btn btn-secondary register-button">Reset</button> -->
                <button class="btn btn-primary register-button"><router-link class="nav-link active" to="/register">Register</router-link> </button>
            </div>
            
        </div>
    </div>
</div>
</template>
<script>
import axios from 'axios';
      export default {
        name:'LoginComp',
        data(){
           return{
            email:'',
            password:'',

           }    
        },
    methods:{
      async login(){

        if (!this.email || !this.password) {
                alert('Please fill in all fields');
                return;
            }

        let uemail = this.email;
        let upassword = this.password;
        let user = await axios.get(`http://localhost:3000/users?email=${uemail}&password=${upassword}`)
        let blogs = await axios.get(`http://localhost:3000/blogs`)
       
         if(user.status==200 && user.data.length > 0){
             alert("Login Succesfully");
              localStorage.setItem("user-info",JSON.stringify(user.data)); 
              localStorage.setItem("blog-info",JSON.stringify(blogs.data))
              this.$router.push({name:'UserHome'})
            }
            else{
                alert("Invalid Login Details");
            }
       }
    },
    mounted(){
            let user = localStorage.getItem('user-info');
            if(user){
                this.$router.push({name:'UserHome'})
            }
            console.log("mounted");
        }
}
      
</script>