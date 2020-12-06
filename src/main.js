import Vue from "vue";
import router from "./router";

import App from "./App.vue";

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

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router
}).$mount("#app");
