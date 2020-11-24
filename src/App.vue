<template>
  <div id="app" class="container">
    <product :product="product" />
  </div>
</template>

<script>
import Product from "./components/Product";

export default {
  name: "App",
  components: {
    Product,
  },
  data() {
    return {
      product: {
        id: 0,
        name: "سکه تمام بهار (طرح قدیم)",
        price: 11200000,
        changeInPercent: 0.5,
        changeInCurrency: 200000,
      },
    };
  },
};
</script>
