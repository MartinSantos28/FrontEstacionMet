import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        sideBarOpen: false, 
        username:null, 
        auth:null, 
    },
    getters: {
        sideBarOpen: state => {
            return state.sideBarOpen
        }
    },
    mutations: {
        toggleSidebar (state) {
            state.sideBarOpen = !state.sideBarOpen
            
        },
        doLogin(state,username){
            state.auth = true
            state.user = username
        },

        doLogout(state){
            state.auth = false,
            state.user = null
        }
    },
    actions: {
        toggleSidebar(context) {
            context.commit('toggleSidebar')
        },

        doLogin({commit},username){
            commit("doLogin",username)
        },

        doLogout({commit}){
            commit("doLogout")
        }
    }
})
