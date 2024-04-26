<template>
<NavBar />
<h1> Create Blog </h1>
<form>
    <div class="form-group">
        <label for="exampleFormControlInput1">Blog Title</label>
        <input type="text" class="form-control" id="Blog Title" placeholder="" v-model="title">
    </div>
    <div class="form-group">
        <label for="exampleFormControlInput1">Blog SubTitle</label>
        <input type="text" class="form-control" id="SubTitle" placeholder="" v-model="subtitle">
    </div>
    <div class="form-group">
        <label for="blogtext">Enter You Thoughts</label>
        <textarea class="form-control" id="blogtext" rows="3" v-model="blogtext"></textarea>
    </div>
    <div class="form-group row">
        <div class="col-sm-9 offset-sm-3">
            <button @click="postblog()" class="btn btn-primary register-button">Post</button>
        </div>

    </div>
</form>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import axios from 'axios';
export default {
    name: 'CreateBlog',
    components: {
        NavBar
    },
    data() {
        return {
            uname: '',
            title: '',
            subtitle: '',
            blogtext: '',
            likes: 0
        }
    },
    methods: {
        postblog() {
            let user = JSON.parse(localStorage.getItem('user-info'));
            this.uname = user[0].name;
            console.log(this.uname);
            let postblog = axios.post('http://localhost:3000/blogs', {
                userName: this.uname,
                title: this.title,
                subtitle: this.subtitle,
                blogtext: this.blogtext,
                likes: this.likes
            })

            localStorage.setItem('blog-info', JSON.stringify(postblog.data))
            this.$router.push({
                name: 'UserHome'
            });
        }
    }
}
</script>
