import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from "@/views/About"
import Start from "@/views/Start"
import Result from "@/views/Result"
import Map from "@/views/Map"
import Legal from "@/views/Legal"
import Tenant from "@/views/Tenant.vue"

Vue.use(Router)

let router = new Router({
    mode : 'history',
    base : process.env.BASE_URL,

    routes : [
        {
            path      : '/',
            name      : 'home',
            component : Home
        },
        {
            path      : '/locataire',
            name      : 'home',
            component : Tenant
        },
        {
            path      : '/commencez',
            name      : 'start',
            component : Start
        },
        {
            path      : '/resultat',
            name      : 'result',
            component : Result
        },
        {
            path      : '/carte-des-artisans',
            name      : 'map',
            component : Map
        },
        {
            path      : '/conditions-legales',
            name      : 'legal',
            component : Legal
        },
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

export default router