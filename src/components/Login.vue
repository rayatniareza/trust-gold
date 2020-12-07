<template>
  <div class="container border rounded p-5">
    <form class="">
      <div class="form-group">
        <span class="d-block pb-2 text-right"
          >شماره همراه خود را وارد کنید</span
        >
        <input
          class="form-control"
          type="text"
          placeholder="شماره همراه"
          id="phone"
          name="phone"
        />
      </div>
      <div class="text-center">
        <button
          type="button"
          class="btn btn-outline-primary px-5"
          @click="login('phone')"
        >
          ورود
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    login(phone) {
      console.log(phone);
    },
  },
};
</script>