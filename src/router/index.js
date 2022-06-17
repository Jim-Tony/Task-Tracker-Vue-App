import { createRouter,createWebHistory } from "vue-router";
import AboutCont from '../views/About.vue';
import HomeCont from '../views/Home.vue';
const routes = [
    {
        path:'/',
        name:'Home',
        component:HomeCont
    },
    {
        path:'/about',
        name:'About',
        component:AboutCont
    }
]
const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes,
})
export default router;