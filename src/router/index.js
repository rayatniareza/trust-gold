import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/checkout",
    name: "checkout",
    component: () => import("../components/Checkout.vue")
  },
  {
    path: "/",
    name: "home",
    component: () => import("../components/Home.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../components/Login.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
