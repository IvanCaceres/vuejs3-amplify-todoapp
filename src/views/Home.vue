<template lang="pug">
.home-container
  .left-section
    .form-wrap(v-if="authChoice === 'login'")
      login-form
      .register-wrap
        p Create an account to login
        base-button(name="create-new-account", type="button", color="secondary", @click="selectAuthChoice('register')") Create New Account
    .form-wrap(v-else)
      registration-form
  .right-section
    base-paper.todo-container
      h2 Give our ToDo List a try.
      p Login or Register to begin creating todo list's stored to your account.
      .todo-wrap
        todo-list
</template>

<script lang="ts">
import { mapState } from "vuex";
import { defineComponent } from "vue";
import BasePaper from "@/components/BasePaper.vue";
import BaseButton from "@/components/BaseButton.vue";
import TodoList from "@/components/TodoList.vue";
import LoginForm from "@/components/LoginForm.vue";
import RegistrationForm from "@/components/RegistrationForm.vue";

export default defineComponent({
  name: "Home",
  components: {
    BaseButton,
    BasePaper,
    TodoList,
    LoginForm,
    RegistrationForm,
  },
  data() {
    return {
      authChoice: "login",
    };
  },
  methods: {
    selectAuthChoice(choice: string) {
      this.authChoice = choice;
    },
  },
  computed: mapState(["user"]),
  watch: {
    user() {
      console.log("user changed!!!", this.user);
    },
  },
});
</script>

<style lang="scss">
.home-container {
  display: flex;
  flex-direction: row;
  padding: var(--theme-padding);
}

.left-section {
  flex-grow: 1;
  max-width: 700px;
}

.right-section {
  margin-left: var(--theme-margin);
  flex-grow: 3;
}

.register-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.todo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.todo-wrap {
  max-width: 800px;
}
</style>
