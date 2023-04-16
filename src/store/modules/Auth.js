import axios from "axios";

const auth = {
  state: {
    token: null,
    user: null,
  },
  mutations: {
    auth_success(state, payload) {
      // Set the token as the default Authorization header for all API requests
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${payload.token}`;
      state.token = payload.token;
      state.user = payload.user;
      state.status = "success";
    },
    logout(state) {
      state.status = "";
      state.token = "";
      delete axios.defaults.headers.common["Authorization"];
    },
  },
  actions: {
    login({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("login", payload)
          .then((response) => {
            commit("SET_TOKEN", response.data.data);
            resolve(true);
          })
          .catch((error) => {
            reject(error.response);
          });
      });
    },
    // eslint-disable-next-line no-unused-vars
    register({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("login", payload)
          .then((response) => {
            resolve(response.data.data);
          })
          .catch((error) => {
            reject(error.response);
          });
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
