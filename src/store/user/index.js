const state = {
    nm: window.localStorage.getItem('username') || '',
    isAdmin: false,
<<<<<<< HEAD
    userHeader:''
=======
    userHeader: ''
>>>>>>> 2e655e97f750ee07fbabc3d77191426664917ccc
}
const mutations = {
    USER_INFO(state, payload) {
        state.nm = payload.nm,
            state.isAdmin = payload.isAdmin
<<<<<<< HEAD
            state.userHeader=payload.userHeader
=======
        state.userHeader = payload.userHeader
>>>>>>> 2e655e97f750ee07fbabc3d77191426664917ccc
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