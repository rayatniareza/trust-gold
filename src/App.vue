<template>
  <div id="app" class="rtl">
    <!--<navbar />

    <product-list :products="products" /> -->
    <products-card
      :products="products"
      :cart="cart"
      @add="addToCart"
      @remove="removeFromCart"
    />
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
      products: null,
      cart: [],
    };
  },
  methods: {
    removeFromCart: function (product) {
      var index = this.cart.findIndex((item) => item.productId === product.id);
      if (index !== -1) {
        if (this.cart[index].qty > 1) {
          this.cart[index].qty--;
        } else {
          this.cart.splice(index, 1);
        }
      }
    },
    addToCart: function (product) {
      var index = this.cart.findIndex((item) => item.productId === product.id);
      if (index !== -1) {
        this.cart[index].qty++;
      } else {
        this.cart.push({ productId: product.id, qty: 1 });
      }
    },
  },
  mounted() {
    console.log("mounted started");
    fetch("./data/products.json")
      .then((response) => response.json())
      .then((data) => {
        this.products = data;
        console.log(data);
      });
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
