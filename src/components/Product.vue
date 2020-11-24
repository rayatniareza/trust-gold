<template>
  <div>
    <span class="mx-2">{{ product.name }}</span>
    <span class="mx-2">{{ product.price }}</span>
    <span class="mx-2">{{ product.changeInPercent }}</span>
    <span class="mx-2">{{ product.changeInCurrency }}</span>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: ["product"],
};
</script>