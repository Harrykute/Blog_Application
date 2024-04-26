<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <div class="container-fluid" >
            <a class="navbar-brand" href="#">
                <img src="../assets/logo.png" alt="Logo" width="90" height="50" class="d-inline-block align-text-top">
                <strong> Blog Application </strong>
            </a>
        </div>
        <!--<a  href="#">Home</a> -->
        <router-link class="navbar-brand" to="/">Home</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <router-link class="nav-link active" to="/userhome">{{ Name }}</router-link>
                <router-link class="nav-link active" to="/createblog">WriteBlog</router-link>
                <router-link class="nav-link active" to="/" v-on:click="logout()">Logout</router-link>
            </div>
        </div>
    </div>
</nav>
</template>

<script>
export default {
    name: 'NavBar',
    props:{
        Name:String
    },
    methods:{
        logout(){
            localStorage.clear();
            this.$router.push({name:'Login'});
        }
    }
}
</script>
