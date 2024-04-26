<template>
<NavBar :Name="uname"/>
<h1> User Home Component</h1>
<h6></h6>
<div class="row">
    <div class="col-sm-6">
        <div v-for="blogPost in blogs" :key="blogPost.id" class="card" style="width: 18rem; border: 1px solid #ccc; margin-bottom: 20px;">
            <div class="card-body">
                <h2 style="margin-bottom: 0;">{{ blogPost.userName }}</h2>
                <h3 style="margin-bottom: 10px;">{{ blogPost.title }}</h3>
                <h4 style="margin-bottom: 10px;">{{ blogPost.subtitle }}</h4>
                <p>{{ blogPost.blogtext }}</p>
                <p style="margin-bottom: 5px;">Likes: {{ blogPost.likes }}</p>
                <button style="padding: 5px 10px; background-color: #007bff; color: #fff; border: none; border-radius: 5px; cursor: pointer;" v-on:click="likefu(blogPost)">Like</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import axios from 'axios';
export default {
    name: 'UserHome',
    components: {
        NavBar
    },
    data() {
        return {
            blogs: [],
            // getBlogs: async function () {
            //     let blogs = await axios.get(`http://localhost:3000/blogs`);
            //     this.blogs = blogs.data;
            //     console.log(this.blogs);
            //    /* let likes = localStorage.getItem('blog-info');
            //     console.log(likes);*/
            // },
            updatelike: 0,
            uname:''
        }
    },
    methods: {
        getBlogs: async function () {
            let blogs = await axios.get(`http://localhost:3000/blogs`);
            this.blogs = blogs.data;
            console.log(this.blogs);
            console.log(this.blogs)
            /* let likes = localStorage.getItem('blog-info');
             console.log(likes);*/

            //console.log(this.like)
        },
        async likefunc(blogPost) {
            blogPost.likes++;
            try {
                await axios.put(`http://localhost:3000/blogs/${blogPost.data.id}`, {
                    likes: blogPost.likes
                });
                console.log('Like updated successfully');
            } catch (error) {
                console.error('Error updating like:', error);
                blogPost.likes--;
            }
        },
        async likefu(blogPost) {
            //let blogs = JSON.parse(localStorage.getItem('blog-info'))
            // console.log(blogs);
            //  for(let blog in blogPost){
            //         console.log(blog.likes);
            //  }
            //console.log(blogPost);
            //console.log(blogs);

            /*let blogs = JSON.parse(localStorage.getItem('blog-info'))
            console.log(blogs[0].likes);

            let updatelikes = blogs[0].likes;
            updatelikes++;*/

            let users = await axios.get(`http://localhost:3000/blogs/${blogPost.id}`)
            console.log(users.data);
            
            
            let like = users.data.likes;
            like++;
            //this.updatelike = like;
            console.log(like);

            //posting like to data
            try {
                await axios.patch(`http://localhost:3000/blogs/${blogPost.id}`, {
                    likes: like
                })
            } catch (error) {
                console.log(error)
            }
            window.location.reload()

        }
    },
    mounted() {
        this.getBlogs();

       /* this.blogs.sort((blog1, blog2) => blog2.likes - blog1.likes);
        console.log(this.blogs);*/
    },
    // computed: {
    // sortedBlogs() {
    //   return [...this.blogs].sort((blog1, blog2) => blog2.likes - blog1.likes);
    // },


}
</script>
<style>
.card {
    border: 1px solid #ccc;
    width: 18rem;
    margin-bottom: 20px;
    padding: 10px;
}

.card-body {
    padding: 10px;
}

.card-body h2 {
    margin-bottom: 0;
}

.card-body h3,
.card-body h4 {
    margin-bottom: 10px;
}

.card-body p {
    margin-bottom: 10px;
}

.card-body button {
    padding: 5px 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>
