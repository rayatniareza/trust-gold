<template>
  <div id="app" class="rtl">
    <!-- <router-view /> -->
    <login />
  </div>
</template>

<script>
// import ProductList from "./components/ProductList";
// import Navbar from "./components/Navbar";
// import ProductsCard from "./components/ProductsCard";
import Login from "./components/login/Login";

export default {
  name: "App",
  components: {
    Login,
  },
};
</script>

<style>
@import url("https://cdn.fontcdn.ir/Font/Persian/Vazir/Vazir.css");

#app {
  font-family: "Vazir", sans-serif;
}

.rtl {
  direction: rtl !important;
}
.ltr {
  direction: ltr !important;
}
</style>
