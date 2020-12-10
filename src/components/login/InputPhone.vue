<template>
  <div>
    <h3 class="mt-4 text-center">ورود/ثبت نام</h3>
    <form class="mt-3 px-5 pb-2">
      <div class="form-group">
        <span class="d-block pb-2 text-right">
          شماره همراه خود را وارد کنید
        </span>
        <input
          class="form-control"
          type="text"
          placeholder="شماره همراه"
          v-model="phone"
        />
        <!-- @keyup.enter="login()" -->
      </div>
      <div class="form-group text-muted text-center">
        <button
          type="button"
          class="btn btn-primary px-5 mt-3 mb-2"
          @click.stop="login()"
        >
          ورود
        </button>
        <p class="mt-1">کد فعالسازی به شماره شما ارسال خواهد شد</p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "InputPhone",
  data() {
    return {
      phone: "",
    };
  },
  methods: {
    isValid(phone) {
      var regex = /^(09)\d{9}/;
      return regex.test(phone);
    },
    login() {
      console.log(this.phone);
      // validate phone number, false: show validate message, true:
      if (!this.isValid(this.phone)) {
        return;
      }
      // disable button, show wait, send phone to server
      // onResponse, dismiss wait, go to next page
      // onFailed, show error
      // "$emit('login', phone )"
    },
  },
};
</script>