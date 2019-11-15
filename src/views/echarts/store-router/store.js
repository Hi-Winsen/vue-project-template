import actionsFn from './api'

const sessionStorage = JSON.parse(window.sessionStorage.getItem('vuex')) || {}
const state = sessionStorage.echarts || {}

const mutations = {}

const actions = {
  ...actionsFn
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
