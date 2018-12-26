<template>
    <form @submit.prevent="onSubmitRegister">
        <div class="form-group">
            <label>First name</label>
            <input type="text" 
            class="form-control" 
            placeholder="First name"
            
            v-model="user.first_name">
            <!-- <form-error v-if="errors">
                {{ errors.first_name[0] }}
            </form-error> -->
        </div>
        <div class="form-group">
            <label>Last name</label>
            <input type="text" 
            class="form-control" 
            placeholder="Last name"
            
            v-model="user.last_name">
            <!-- <form-error v-if="errors">
                {{ errors.last_name[0] }}
            </form-error> -->
        </div>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" 
            class="form-control" 
            placeholder="Enter email"
           
            v-model="user.email">
            <!-- <form-error v-if="errors">
                {{ errors.email[0] }}
            </form-error> -->
        </div>    
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" 
            class="form-control" 
            placeholder="Password"
            v-model="user.password">
            <!-- <form-error v-if="errors">
                {{ errors.password[0] }}
            </form-error> -->
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password confirmed</label>
            <input type="password" 
            class="form-control" 
            placeholder="Password confirmed"
            v-model="user.password_confirmation">
             <!-- <form-error v-if="errors">
                {{ errors.password_confirmation[0] }}
            </form-error>            -->
        </div>
        <div class="form-group form-check">
            <input type="checkbox" class="form-check-input"
            v-model="user.conditions">
            <!-- <form-error v-if="errors">
                {{ errors.conditions[0] }}
            </form-error> -->
            <label class="form-check-label" 
            for="exampleCheck1">
            Accepted terms and conditions
            </label>
        </div>
        <button type="submit" class="btn btn-primary">Register</button>
    </form>
</template>

<script>

import { mapActions, /*mapGetters*/ } from 'vuex'

export default {
    data() {
        return {
            user: {},
            //errors: {}
        }
    },

    methods: {
         ...mapActions(['register']),

        onSubmitRegister() {
            console.log(this.user)
           this.register(this.user)
        },
    },
    // computed: {
    //     ...mapGetters({
    //         error: 'getErrors'
    //     })
    // }
   
// Password: confirmed, at least 8 chars, at least 1 digit
// Accepted terms and conditions 
//ne zaboravi v-model
}
</script>


