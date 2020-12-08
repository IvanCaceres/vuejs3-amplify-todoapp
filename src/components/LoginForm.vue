<template lang="pug">
base-paper
  .login-form-container
    h3.login-title LOGIN
    form(@submit.prevent="onSubmit")
      base-input(v-model="email", name="email", type="email", placeholder="Email", label="Email Address", ariaPlaceholder="Example: jane@sample.com", autocomplete="username", required)
      base-input(v-model="password", name="password", type="password", placeholder="Password", label="Password", ariaPlaceholder="Example: Your account password.", autocomplete="current-password", required)
      base-button(name="Login", type="submit") Login
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("login", {
        username: this.email,
        password: this.password,
      });
    },
  },
});
</script>

<style scoped lang="scss">
.login-title {
  text-align: center;
}
</style>
