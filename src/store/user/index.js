const state = {
    nm: ''
}
const mutations = {
    USER_INFO(state, payload) {
        state.nm = payload.nm
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