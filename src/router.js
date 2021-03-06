import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from './components/Auth/Login.vue'
import Register from './components/Auth/Register.vue'

import AllGalleries from './components/AllGalleries.vue'
import SingleGallery from './components/SingleGallery.vue'
import CreateGallery from './components/CreateGallery.vue'
import MyGalleries from './components/MyGalleries.vue'
import AuthorsGalleries from './components/AuthorsGalleries.vue'

Vue.use(VueRouter)

const routes = [
    {path: '/login', 
    component: Login,
    name: 'login',
    meta: {
            guest: true
        }
    },
    {path: '/',
    component: AllGalleries,
    name: 'all-galleries',
    },
    {path: '/register',
    component: Register,
    name: 'register',
    meta: {
        guest: true
    }
    },
    {path: 'galleries/:id',
    component: SingleGallery,
    name: 'single-gallery'
    },
    {path: '/add',
    component: CreateGallery,
    name: 'add',
    meta: {
        auth: true
    }
    },
    {path: '/my-galleries',
    component: MyGalleries,
    name: 'my-galleries',
    meta: {
        auth: true
    }
    },
    {path: '/authors/:id',
    component: AuthorsGalleries,
    name: 'authors'
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

router.beforeEach((to,from,next) => {
    const isAuthenticated = !!localStorage.getItem('token')

    if(isAuthenticated && to.meta.guest) {
        return next({ name: 'all-galleries' })
    }
    if(!isAuthenticated && to.meta.auth) {
        return next({ name: 'login' })
    }
    return next()
})

export default router