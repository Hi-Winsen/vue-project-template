import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import globalStore from "./global";

Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [createPersistedState({ storage: window.sessionStorage })]
});

const storeContext = require.context(
  "@/views/",
  true,
  /\/[\w-]+\/store-router\/store.js$/
);
storeContext.keys().forEach(modules => {
  let moduleName = modules.match(/^\.\/([\w-]+)\/store-router\/store.js/)[1];
  let moduleValue = storeContext(modules).default;
  store.registerModule(moduleName, moduleValue);
});
store.registerModule("global", globalStore);

Vue.prototype.$store = store;

export default store;
