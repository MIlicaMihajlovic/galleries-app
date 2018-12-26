import authService from '../services/auth-service.js'
import router from '../router.js'

const getUserFromLocalStorage = () => {
    const json = localStorage.getItem('user')
    return JSON.parse(json.user || '{}')
}

// const getUserFromLocalStorage = () => {
//     const user = localStorage.getItem('user')
//     if(user) {
//         return JSON.parse(user)
//     }
//     return null
//  }
export default {
    state: {
        user: getUserFromLocalStorage(),
        token: localStorage.getItem('token'),
        errors: null
    },

    mutations: {
        SET_DATA(state, { user, token }) {
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
                localStorage.setItem('token',token)
                authService.setAuthHeaders(token)  //pozvali funkciju i prosledili joj token
                commit('SET_DATA', { user, token })
                router.push({ name: 'all-galleries' })
            } catch(error) {
                commit('SET_ERRORS', error.response.data.message)
            }
                
        },

        async register({ commit }, {
            first_name, 
            last_name, 
            email, 
            password, 
            password_confirmation, 
            conditions   
        }) {
            try{
                const { user, token } = await authService.register(
                    first_name, 
                    last_name, 
                    email, 
                    password, 
                    password_confirmation, 
                    conditions)   
                localStorage.setItem('user', JSON.stringify(user))
                localStorage.setItem('token', token)
                authService.setAuthHeaders(token)
                commit('SET_DATA', { user, token })
                router.push({ name: 'all-galleries' })
            }catch(error) {
                commit('SET_ERRORS', error)  
            }
            
        },

        logout({ commit }) {
            authService.setAuthHeaders()
            localStorage.removeItem('user')
            localStorage.removeItem('token')
            commit('SET_DATA', {user: null, token: null})
            router.push({ name: 'login' })
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