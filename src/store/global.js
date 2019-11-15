const sessionStorage = JSON.parse(window.sessionStorage.getItem('vuex')) || {}
const state = sessionStorage.global || {}
const actions = {}
const mutations = {}
export default {
  namespaced: true,
  state,
  actions,
  mutations
}
