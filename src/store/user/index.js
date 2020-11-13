const state = {
    nm: window.localStorage.getItem('username') || '',
    isAdmin: false,
    userHeader: ''
}
const mutations = {
    USER_INFO(state, payload) {
        state.nm = payload.nm,
            state.isAdmin = payload.isAdmin
        state.userHeader = payload.userHeader
    }
}
const actions = {

}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}