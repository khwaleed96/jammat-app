import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import boot from "./modules/Boot";
import auth from "./modules/Auth";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    boot,
    auth,
  },

  plugins: [createPersistedState()],
});
