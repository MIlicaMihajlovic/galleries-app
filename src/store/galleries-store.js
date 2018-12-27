import galleriesService from '../services/galleries-service.js'

export default {
    state: {
        // data: [],
        // total: 0,
        // per_page: 10,
        // current_page: 1,
        // // from: 1, //od prve stranice da krene
        // // last_page: 0,
         errors: null,
        galleries: {},
        skip: 0,
        take: 10
        
    },

    mutations: {
        SET_GALLERIES(state, galleries) {
            state.galleries = galleries.data
            state.skip = galleries.skip
            state.take = galleries.take
            // state.total = payload.total
            // state.per_page = payload.per_page
            // state.current_page = payload.current_page
        },

        SET_ERRORS(state, payload) {
            state.errors = payload
        }
    },

    actions: {
        async getGalleries({commit}, payload) {
            try{
                const galleriesData = await galleriesService.getGalleries(payload)
                commit('SET_GALLERIES', galleriesData)
            } catch(errors) {
                commit('SET_ERRORS', errors)
            }
            
        }
    },

    getters: {
        getData(state) {
            return state.galleries
        },

        getSkip(state) {
            return state.skip
        },

        getTake(state) {
            return state.take
        },

        // getTotal(state) {
        //     return state.total
        // },

        // getPerPage(state) {
        //     return state.per_page
        // },
        
        // getCurrentPage(state) {
        //     return state.current_page
        // }
    }
}