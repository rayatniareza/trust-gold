<template>
  <div class="">
    <product-card-item
      class="bg-dark text-light"
      :product="currentProduct"
      :remain="currentProduct.remain"
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
  props: ["products"],
  components: {
    ProductCardItem,
  },
  data() {
    return {
      currentProduct: this.products[0],
    };
  },
};
</script>