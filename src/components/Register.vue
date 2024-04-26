<template>
<div class="container registration-container">
    <img class="logo" src="@/assets/logo.png" alt="Logo">
    <h1 class="text-center">User Registration</h1>
    <div class="register">
        <div class="form-group row">
            <label for="name" class="col-sm-3 col-form-label">Name:</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" id="name" placeholder="Enter Name" v-model="name">
            </div>
        </div>
        <div class="form-group row">
            <label for="email" class="col-sm-3 col-form-label">Email:</label>
            <div class="col-sm-9">
                <input type="email" class="form-control" id="email" placeholder="Enter Email" v-model="email">
            </div>
        </div>
        <div class="form-group row">
            <label for="password" class="col-sm-3 col-form-label">Password:</label>
            <div class="col-sm-9">
                <input type="password" class="form-control" id="password" placeholder="Enter Password" v-model="password">
            </div>
        </div>
        <div class="form-group row">
            <div class="col-sm-9 offset-sm-3">
                <button v-on:click="registerFunc()" class="btn btn-primary register-button">Register</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'RegisterComp',
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async registerFunc() {

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

            if (!this.email || !emailRegex.test(this.email)) {
                alert('Please enter a valid email address.');
                return;
            }

            if (!this.password || !passwordRegex.test(this.password)) {
                alert('Please enter a valid password. Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
                return;
            }

            let result = await axios.post("http://localhost:3000/users", {
                email: this.email,
                name: this.name,
                password: this.password
            });
            console.warn(result);
            if (result.status == 201) {
                alert("Register Succesfully");
                localStorage.setItem("user-info", JSON.stringify(result.data));
                localStorage.clear()
                this.$router.push({
                    name: 'Login'
                })
            }
        },
    }
}
</script>
