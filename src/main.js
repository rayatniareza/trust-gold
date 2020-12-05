import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App.vue";
import Checkout from "./components/Checkout";
import Home from "./components/Home";
import Signin from "./components/Signin";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faShoppingBag,
  faPlus,
  faMinus
} from "@fortawesome/free-solid-svg-icons";

library.add(faUser, faShoppingBag, faPlus, faMinus);

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    {
      path: "/checkout",
      component: Checkout
    },
    {
      path: "/signin",
      component: Signin
    },
    {
      path: "*",
      component: Home
    }
  ]
});

new Vue({
  render: (h) => h(App),
  router
}).$mount("#app");
