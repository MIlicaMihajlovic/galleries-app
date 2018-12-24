import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from './components/Auth/Login.vue'

Vue.use(VueRouter)

const routes = [
    {path: '/', component: Login, name: 'login'}
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router