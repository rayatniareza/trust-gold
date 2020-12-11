<template>
  <div>
    <h3 class="mt-4 text-center">ورود/ثبت نام</h3>
    <form class="mt-3 px-5 pb-2">
      <div class="form-group">
        <label class="d-block pb-2 text-right">
          شماره همراه خود را وارد کنید
        </label>
        <input
          class="form-control"
          :class="valid"
          type="text"
          placeholder="شماره همراه"
          v-model="phone"
        />
        <!-- <div class="valid-feedback d-block text-right">
          {{error}}
        </div> -->
      </div>
      <div class="form-group text-muted text-center">
        <button
          type="button"
          class="btn btn-primary px-5 mt-3 mb-2"
          @click.stop="login()"
          :disabled="wait"
        >
          <span
            class="spinner-border spinner-border-sm"
            :class="wait ? '' : 'invisible'"
            role="status"
            aria-hidden="true"
          />
          ورود
        </button>
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
      valid: "",
      wait: false,
    };
  },
  computed: {},
  watch: {
    phone() {
      this.valid = this.validate(this.phone) ? "is-valid" : "";
    },
  },
  methods: {
    validate(phone) {
      var regex = /^(09)\d{9}/;
      return regex.test(phone);
    },
    showWait(newValue) {
      this.wait = newValue;
    },
    login() {
      // validate phone number, false: show validate message, true:
      if (!this.validate(this.phone)) {
        this.valid = "is-invalid";
        return;
      }
      // disable button, show wait,
      this.showWait(true);
      // send phone to server

      // onResponse, dismiss wait, go to next page
      // onFailed, show error
      // "$emit('login', phone )"
    },
  },
};
</script>