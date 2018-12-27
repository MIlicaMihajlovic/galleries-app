<template>
    <form @submit.prevent="onSubmitForm">
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" 
            class="form-control" 
            placeholder="Enter email"
            v-model="email">
            <!-- <form-error v-if="error">
                    {{ error }}
            </form-error> -->
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password"
            class="form-control"
            placeholder="Password" 
            v-model="password">
           <!-- <form-error v-if="error">
                    {{ error }}
            </form-error> -->
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
    </form>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

// import FormError from '../FormError.vue'

export default {
    // components: {
    //     FormError
    // },

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
    },

    // computed: {
    //     ...mapGetters({
    //         error: 'getErrors'
    //     })
    // }
}
</script>

