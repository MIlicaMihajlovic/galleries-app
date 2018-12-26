<template>
    <div> 
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <router-link class="navbar-brand" :to="{name: 'all-galleries'}">  
               All Galleries 
            </router-link>
            <router-link v-if="!user" class="navbar-brand" :to="{name: 'login'}">  
                Login
            </router-link>
            <router-link  v-if="!user" class="navbar-brand" :to="{name: 'register'}">  
                Register
            </router-link>
            <a v-if="user" class="navbar-brand" @click="onLogoutClick">  
            Logout
            </a>   
        </nav>  
        
    </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {
    computed: {
    ...mapGetters({
      user: 'getUser'
    })
    },

    methods: {
        ...mapActions([ 'logout' ]),
        onLogoutClick() {
        this.logout()
        }
    }
}
</script>

<style>
.navbar a {
    color: white !important;
}
</style>


