export const state = () => ({
    mobile: false,
})
export const mutations = {
    setMobile(state, check) {
        state.mobile = check
    }
}
export const getters = {
    mobile(state) {
        return state.mobile
    }
}