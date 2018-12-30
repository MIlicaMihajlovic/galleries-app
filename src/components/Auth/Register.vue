<template>
    <form @submit.prevent="onSubmitRegister">
        <div class="form-group">
            <label>First name</label>
            <input type="text" 
            class="form-control" 
            placeholder="First name"
            v-model="user.first_name"
            required>
        </div>
        <div class="form-group">
            <label>Last name</label>
            <input type="text" 
            class="form-control" 
            placeholder="Last name"            
            v-model="user.last_name"
            required> 
        </div>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" 
            class="form-control" 
            placeholder="Enter email"           
            v-model="user.email"
            required>
        </div>    
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" 
            class="form-control" 
            placeholder="Password"
            v-model="user.password"
            pattern="(?=.*\d).{8,}"
            required>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password confirmed</label>
            <input type="password" 
            class="form-control" 
            placeholder="Password confirmed"
            v-model="user.password_confirmation"
            required>         
        </div>
        <div class="form-group form-check">
            <input type="checkbox" class="form-check-input"
            v-model="user.conditions"
            required>
            <label class="form-check-label" 
            for="exampleCheck1">
            Accepted terms and conditions
            </label>
        </div>
        <button type="submit" class="btn btn-primary">Register</button>
    </form>
</template>

<script>

import { mapActions } from 'vuex'

export default {
    
    data() {
        return {
            user: {}
        }
    },

    methods: {
         ...mapActions(['register']),

        onSubmitRegister() {
            console.log(this.user)
           this.register(this.user)
        },
    }
}
</script>


            