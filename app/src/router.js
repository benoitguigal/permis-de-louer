import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Signin from "@/views/Signin"
import Signup from "@/views/Signup"
import About from "@/views/About"
import Start from "@/views/Start"

Vue.use(Router)

export default new Router({
    mode   : 'history',
    base   : process.env.BASE_URL,
    routes : [
        {
            path      : '/',
            name      : 'home',
            component : Home
        },
        {
            path      : '/commencez',
            name      : 'start',
            component : Start
        },
        // {
        //     path      : '/sign-in',
        //     name      : 'sign-in',
        //     component : Signin
        // },
        // {
        //     path      : '/sign-up',
        //     name      : 'sign-up',
        //     component : Signup
        // },
        {
            path      : '/about',
            name      : 'about',
            component : About
        },
        // {
        //     path      : '/about',
        //     name      : 'about',
        //     // route level code-splitting
        //     // this generates a separate chunk (about.[hash].js) for this route
        //     // which is lazy-loaded when the route is visited.
        //     component : () => import(/* webpackChunkName: "about" */ './views/About.vue')
        // }
    ]
})
