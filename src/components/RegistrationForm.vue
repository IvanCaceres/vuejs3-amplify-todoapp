<template lang="pug">
base-paper
  .registration-form-container
    h3.registration-title REGISTER
    form(@submit.prevent="onSubmit")
      base-input(v-model="email", name="email", type="email", placeholder="Email", label="Email Address", ariaPlaceholder="Example: jane@sample.com", autocomplete="username", required)
      base-input(v-model="password", name="password", type="password", placeholder="Password", label="Password", ariaPlaceholder="Example: Your account password must be at least 8 characters.", autocomplete="new-password", required)
      base-input(v-model="confirmPassword", name="confirm-password", type="password", placeholder="Confirm Password", label="Confirm Password", ariaPlaceholder="Example: Confirm your password by re-entering.", autocomplete="new-password", required)
      base-button(name="Login", type="submit") Register
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RegistrationForm",
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    onSubmit() {
      // submit registration form to AWS Cognito via VueX Store action
      this.$store
        .dispatch("registerUser", {
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword,
        })
        .then((user: any) => {
          //log user in after registration
          this.$store.dispatch("login", {
            username: this.email,
            password: this.password,
          });
        });
    },
  },
});
</script>

<style scoped lang="scss">
.registration-title {
  text-align: center;
}
</style>
