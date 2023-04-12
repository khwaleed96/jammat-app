import Vue from "vue";
import VueRouter from "vue-router";

import welcome from "../views/Welcome.vue";

import login from "../views/Login.vue";
import signup from "../views/Signup.vue";

import dashboard from "../views/Dashboard.vue";
import cityAdmin from "../views/CityAdmin.vue";
import ammartSecretary from "../views/AmmartSecretary.vue";
import halqaSecetary from "../views/HalqaSecretary.vue";
import studant from "../views/Studant.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "welcome",
    component: welcome,
    meta: { title: "Welcome", guest: true },
  },
  {
    path: "/login",
    name: "login",
    component: login,
    meta: { title: "Login", guest: true },
  },
  {
    path: "/signup",
    name: "signup",
    component: signup,
    meta: { title: "Sign up", guest: true },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: dashboard,
    meta: { title: "Dashboard", auth: true },
  },
  {
    path: "/city-admin",
    name: "cityAdmin",
    component: cityAdmin,
    meta: { title: "City admin", auth: true, userAllowed: [1] },
  },
  {
    path: "/ammart-secretary",
    name: "ammartSecretary",
    component: ammartSecretary,
    meta: { title: "Ammart secretary", auth: true, userAllowed: [1, 2] },
  },
  {
    path: "/halq-secetary",
    name: "halqaSecetary",
    component: halqaSecetary,
    meta: { title: "Halqa secetary", auth: true, userAllowed: [1, 2, 3] },
  },
  {
    path: "/studant",
    name: "studant",
    component: studant,
    meta: { title: "Studant", auth: true, userAllowed: [1, 2, 3, 4] },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

const DEFAULT_TITLE = "Jammat App";
// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
  // Use next tick to handle router history correctly
  Vue.nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE;
  });
});

export default router;
