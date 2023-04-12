import axios from "axios";

const auth = {
  state: {
    token: localStorage.getItem("token") || "",
    status: "",
    user: {},
  },
  mutations: {
    auth_success(state, token, user) {
      state.token = token;
      state.user = user;
      state.status = "success";
    },
    auth_error(state) {
      state.status = "error";
    },
    logout(state) {
      state.status = "";
      state.token = "";
    },
  },
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        //   commit('auth_success', token, user)
        //   localStorage.setItem('token', token)
        // Set the token as the default Authorization header for all API requests
        //   axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        //   resolve(response)
      }).catch((error) => {
        commit("auth_error");
        localStorage.removeItem("token");
        reject(error);
      });
    },
    logout({ commit }) {
      return new Promise((resolve) => {
        commit("logout");
        localStorage.removeItem("token");
        delete axios.defaults.headers.common["Authorization"];
        resolve();
      });
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.token,
    authStatus: (state) => state.status,
  },
};

export default auth;
