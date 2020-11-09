const state = {
    nm: '',
    isAdmin: false
}
const mutations = {
    USER_INFO(state, payload) {
        state.nm = payload.nm,
            state.isAdmin = payload.isAdmin
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