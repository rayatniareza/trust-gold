<template>
  <div id="app" class="rtl">
    <!--<navbar />

    <product-list :products="products" /> -->
    <products-card :products="products" />
    <!-- <product-card-item :product="products[1]" :remain="10" /> -->
  </div>
</template>

<script>
// import ProductList from "./components/ProductList";
// import Navbar from "./components/Navbar";
import ProductsCard from "./components/ProductsCard";

export default {
  name: "App",
  components: {
    // ProductList,
    // Navbar,
    ProductsCard,
  },
  data() {
    return {
      products: [
        {
          id: 0,
          name: "سکه تمام بهار (طرح قدیم)",
          price: 12000000,
          changeInPercent: 0.5,
          lastClosePrice: 11800000,
          remain: 5,
        },
        {
          id: 1,
          name: "نیم سکه بهار آزادی",
          price: 6200000,
          changeInPercent: 0.5,
          lastClosePrice: 6300000,
          remain: 10,
        },
      ],
    };
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
