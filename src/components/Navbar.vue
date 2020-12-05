<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-primary">
    <a class="navbar-brand" href="#">{{ appTitle }}</a>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" href="#">فروشگاه</a>
        </li>
        <li class="nav-item disabled">
          <a class="nav-link" href="#">بازار</a>
        </li>
      </ul>
    </div>
    <ul class="nav">
      <li class="nav-item">
        <button class="btn btn-sm btn-outline-light mx-2">
          <font-awesome-icon class="icon" icon="user" />
          ورود
        </button>
      </li>
      <li class="nav-item d-flex align-items-center" v-if="sumOfItems() > 0">
        <span class="ml-2 text-light">|</span>
      </li>
      <li class="nav-item d-flex align-items-center" v-if="count > 0">
        <div class="">
          <font-awesome-icon class="icon mx-1 text-light" icon="shopping-bag" />
          <span class="text-light mx-1">{{ count | toPersian }}</span>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "navbar",
  components: {
    FontAwesomeIcon,
  },
  props: ["cart"],
  data() {
    return {
      count: 0,
      appTitle: "Store",
    };
  },
  filters: {
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
  },
  methods: {
    sumOfItems: function () {
      var sum = 0;
      this.cart.forEach((value, index, array) => {
        sum += value.qty;
      });
      this.count = sum;
      return sum;
    },
  },
};
</script>

<style>
.icon {
  vertical-align: middle;
}
</style>