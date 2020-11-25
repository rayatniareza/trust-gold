<template>
  <div>
    <div v-for="(item, index) in products" :key="index">
      <product-row-item :product="item" />
    </div>
  </div>
</template>

<script>
import ProductRowItem from "./ProductRowItem";
export default {
  name: "ProductList",
  components: { ProductRowItem },
  props: ["products"],
};
</script>