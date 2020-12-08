<template lang="pug">
app-header
router-view
</template>

<script>
import { defineComponent } from "vue";
import AppHeader from "@/components/AppHeader.vue";

export default defineComponent({
  name: "App",
  components: {
    AppHeader,
  },
  created() {
    // check if user is currently authenticated
    this.$store.dispatch("checkAuth").then(user => {
      if (user) {
        this.$router.push("/panel/todos");
      }
    });
  },
});
</script>

<style lang="scss">
:root {
  // css variables
  --theme-base-font-size: 16px;
  --theme-font-family: Helvetica, Arial, sans-serif;

  --theme-background-color: #181824;
  --theme-primary-color: #25273c;
  --theme-secondary-color: #fff;
  --theme-outline-color: #90caf9;
  --theme-border-color: rgb(84 84 84);
  --theme-placeholder-color: rgb(189 189 189);
  --theme-button-primary-color: #90caf9;
  --theme-button-secondary-color: #42b72a;

  --theme-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --theme-ring-shadow: 0 0 transparent;

  --theme-padding: 0.5rem;
  --theme-margin: 1.25rem;
  --theme-border-radius: 0.3125rem;

  // <html> properties
  font-family: var(--theme-font-family);
  background: var(--theme-background-color);
  color: var(--theme-secondary-color);
  font-size: var(--theme-base-font-size);
}

body {
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
