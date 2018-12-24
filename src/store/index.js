import Vue from 'vue'
import Vuex from 'vuex'

import authStore from './auth-store.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        authStore
    }
})

export default store