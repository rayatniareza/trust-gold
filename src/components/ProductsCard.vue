<template>
  <div class="card p-1 m-4">
    <product-card-item
      class="bg-dark text-light"
      :product="currentProduct"
      :qty="currentQty"
    />
    <div class="btn-toolbar">
      <div
        class="btn-group mr-1 mt-1"
        v-for="(item, index) in products"
        :key="index"
      >
        <button
          type="button"
          class="btn btn-sm btn-light"
          @click="currentProduct = item"
        >
          {{ item.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCardItem from "./ProductCardItem";

export default {
  name: "ProductsCard",
  props: ["products", "cart"],
  components: {
    ProductCardItem,
  },
  data() {
    return {
      currentProduct: null,
    };
  },
  computed: {
    currentQty: function () {
      var index = this.cart.findIndex(
        (item) => item.product.id === this.currentProduct.id
      );
      if (index !== -1) {
        return this.cart[index].qty;
      }
      return 0;
    },
  },
};
</script>