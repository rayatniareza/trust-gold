<template>
  <div class="row container">
    <div class="col-sm-4 text-right">
      <span class="h5">{{ product.name }}</span>
    </div>
    <div class="col-sm-4 text-center">
      <div :class="changeColor">
        {{ product.price | currencyFormater | toPersian }}
      </div>
      <div class="text-muted">
        <span>{{ changeInCurrency | currencyFormater | toPersian }}</span>
        <span class="mx-1">({{ changeInPercent | toPersian }}%)</span>
      </div>
    </div>
    <div class="col-sm-4 text-left">
      <div class="d-flex">
        <button @click="increaseQty">+</button>
        <div class="text-center">
          {{ qty | toPersian }}
        </div>
        <button @click="decreaseQty">-</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductMainCardItem",
  props: ["product", "remain"],
  data() {
    return {
      qty: 0,
    };
  },
  filters: {
    rial: function (price) {
      return "تومان" + price;
    },
    toPersian: function (digits) {
      const replaceChars = {
        0: "۰",
        1: "۱",
        2: "۲",
        3: "۳",
        4: "۴",
        5: "۵",
        6: "۶",
        7: "۷",
        8: "۸",
        9: "۹",
      };
      return digits.toString().replace(/\d/g, function (match) {
        return replaceChars[match];
      });
    },
    currencyFormater: function (price) {
      return price
        .toString()
        .split("")
        .reverse()
        .reduce(function (acc, num, i, orig) {
          return num == "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
        }, "");
    },
  },
  computed: {
    changeColor: function () {
      return this.changeInCurrency > 0 ? "text-success" : "text-danger";
    },
    changeInCurrency: function () {
      return this.product.price - this.product.lastClosePrice;
    },
    changeInPercent: function () {
      return (
        ((this.product.price - this.product.lastClosePrice) /
          this.product.price) *
        100
      ).toFixed(2);
    },
  },
  methods: {
    increaseQty: function () {
      if (this.qty < this.remain) this.qty++;
    },
    decreaseQty: function () {
      if (this.qty > 0) this.qty--;
    },
  },
};
</script>