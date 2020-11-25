<template>
  <div class="d-flex border rounded p-1 m-2">
    <div class="col-sm-4 text-right font-weight-bold">{{ product.name }}</div>
    <div class="col-sm-2 text-center text-muted">
      {{ changeInCurrency | currencyFormater | toPersian }}
    </div>
    <div class="col-sm-1 text-center text-muted">
      {{ changeInPercent | toPersian }}
    </div>
    <div class="col-sm-3 text-center" :class="changeColor">
      {{ product.price | currencyFormater | toPersian }}
    </div>
    <div class="col-sm-1 mx-2">
      <button type="button" class="btn btn-sm btn-success">خرید</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductRowItem",
  props: ["product"],
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
};
</script>