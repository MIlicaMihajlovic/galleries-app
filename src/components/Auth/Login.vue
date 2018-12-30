<template>

    <form @submit.prevent="onSubmitForm">
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" 
            class="form-control" 
            placeholder="Enter email"
            v-model="email"
            required>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password"
            class="form-control"
            placeholder="Password" 
            v-model="password"
            required>
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
    </form>

</template>

<script>

import { mapActions } from 'vuex'


export default {
    data() {
        return {
            email: '',
            password: '',
        }
    },

    methods: {
        ...mapActions(['login']),

        onSubmitForm() {
            
            this.login({ email: this.email, password: this.password })
          
        }
    }
}
</script>

