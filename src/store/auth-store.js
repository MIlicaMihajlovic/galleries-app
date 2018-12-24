import authService from '../services/auth-service.js'
import router from '../router.js'

const getUserFromLocalStorage = () => {
    const user = localStorage.getItem('user')
    return JSON.parse(user)
}

export default {
    state: {
        user: getUserFromLocalStorage(),
        token: 'token',
        errors: null
    },

    mutations: {
        SET_DATA(state, { user,token }) {
            state.user = user
            state.token = token
            state.errors = null
        },

        SET_ERRORS(state, payload) {
            state.errors = payload
        }

    },

    actions: {
        async login({ commit }, { email, password }) {
            try {
                const { user, token } = await authService.login(email, password) 
                localStorage.setItem('user', JSON.stringify(user)) 
                localStorage.setItem('token')
                authService.setAuthHeaders(token)  //pozvali funkciju i prosledili joj token
                commit('SET_DATA', { user, token })
                router.push({ name: 'galleries' })
            } catch(error) {
                commit('SET_ERRORS', error.response.data)
            }
                
        }

    },

    getters: {
        getUser(state) {
            return state.user
        },

        getErrors(state) {
            return state.errors
        }

    }
}