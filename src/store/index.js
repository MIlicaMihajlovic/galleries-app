import Vue from 'vue'
import Vuex from 'vuex'

import authStore from './auth-store.js'
import galleriesStore from './galleries-store.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        authStore,
        galleriesStore
    }
})

export default store