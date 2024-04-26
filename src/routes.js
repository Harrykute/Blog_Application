import {createWebHistory,createRouter} from 'vue-router';
import Login from '@/components/Login.vue';
import UserHome from '@/components/UserHome.vue';
import Register from '@/components/Register.vue';
import CreateBlog from '@/components/CreateBlog.vue';
const routes =[
    {
    name:'UserHome',
    path:'/userHome',
    component:UserHome
},
{
    name:'Login',
    path:'/',
    component:Login
},
{
    name:'Register',
    path:'/register',
    component:Register
},
{
    name:'CreateBlog',
    path:'/createblog',
    component:CreateBlog
}
]

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;