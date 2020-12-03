<template>
  <div class="row p-2">
    <div class="col-sm-6 text-right d-flex">
      <span class="align-self-center">{{ product.name }}</span>
    </div>
    <div class="col-sm-auto d-flex align-items-center text-center">
      <div class="container">
        <div :class="changeColor">
          {{ product.price | currencyFormater | toPersian }}
        </div>
        <div class="">
          <span>{{ changeInCurrency | currencyFormater | toPersian }}</span>
          <span class="mx-1">({{ changeInPercent | toPersian }}%)</span>
        </div>
      </div>
    </div>

    <div class="col-sm-2">
      <div class="d-flex justify-content-center">
        <button
          class="btn btn-sm btn-success rounded-circle"
          @click="increaseQty"
        >
          <font-awesome-icon icon="plus" />
        </button>
      </div>
      <div class="text-center mt-1">
        {{ qty | toPersian }}
      </div>
      <div class="d-flex justify-content-center">
        <button
          class="btn btn-sm btn-danger rounded-circle"
          @click="decreaseQty"
        >
          <font-awesome-icon icon="minus" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "ProductCardItem",
  props: ["product", "qty"],
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {};
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
      if (this.qty < this.product.remain)
        this.$parent.$emit("add", this.product);
    },
    decreaseQty: function () {
      if (this.qty > 0) this.$parent.$emit("remove", this.product);
    },
  },
};
</script>