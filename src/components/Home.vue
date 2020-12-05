<template>
  <div>
    <navbar :cart="cart" />

    <!--<product-list :products="products" /> -->
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
import Navbar from "./Navbar";
import ProductsCard from "./ProductsCard";

export default {
  name: "Home",
  components: {
    // ProductList,
    Navbar,
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
      var index = this.cart.findIndex((item) => item.product.id === product.id);
      if (index !== -1) {
        if (this.cart[index].qty > 1) {
          this.cart[index].qty--;
        } else {
          this.cart.splice(index, 1);
        }
      }
    },
    addToCart: function (product) {
      var index = this.cart.findIndex((item) => item.product.id === product.id);
      if (index !== -1) {
        this.cart[index].qty++;
      } else {
        this.cart.push({ product: product, qty: 1 });
      }
    },
  },
  mounted() {
    fetch("./data/products.json")
      .then((response) => response.json())
      .then((data) => {
        this.products = data;
      });
  },
};
</script>