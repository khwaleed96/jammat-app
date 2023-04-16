import axios from "axios";

const boot = {
  state: {
    bootSettings: null,
  },
  mutations: {
    set_boot_settings: (state, payload) => (state.bootSettings = payload),
  },
  actions: {
    getBootSettings({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get("boot", payload)
          .then((response) => {
            commit("set_boot_settings", response.data.data);
            resolve(true);
          })
          .catch((error) => {
            reject(error.response);
          });
      });
    },
  },
  getters: {
    bootSettings: (state) => state.bootSettings,
  },
};

export default boot;
