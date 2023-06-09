import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";

import "./tailwind.css";

Vue.config.productionTip = false;

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://jammatapp.co/api/";

store.dispatch("getBootSettings").then(() => {
  new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
  }).$mount("#app");
});
