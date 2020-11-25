<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
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
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <button class="btn btn-sm btn-outline-light mx-2">
          <font-awesome-icon class="icon" icon="user" />
          ورود
        </button>
      </li>
      <li class="nav-item">
        <span class="ml-2 text-light align-middle">|</span>
        <button class="btn btn-sm btn-dark">
          <font-awesome-icon class="icon mx-1" icon="shopping-bag" />
          <span class="badge badge-dark mx-1" v-if="count > 0">{{
            count
          }}</span>
        </button>
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
  data() {
    return {
      count: 25,
      appTitle: "Store",
    };
  },
};
</script>

<style>
.icon {
  vertical-align: middle;
}
</style>