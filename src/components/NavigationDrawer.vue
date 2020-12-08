<template lang="pug">
.navigation-drawer-container
  ul.nav-list
    li
      router-link(:to="'/panel/todos'")
        fa.nav-icon(icon="sticky-note", type="fas")
        |Todos 
    li 
      router-link(:to="'/panel/calendar'")
        fa.nav-icon(icon="calendar", type="fas")
        |Calendar
    li
      a(@click="logout")
        fa.nav-icon(icon="sign-out-alt", type="fas")
        |Logout
</template>

<script>
import { defineComponent } from "vue";
import Calendar from "@/components/Calendar.vue";

export default defineComponent({
  name: "DatePicker",
  methods: {
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/");
      });
    },
  },
});
</script>

<style lang="scss">
.navigation-drawer-container {
  width: 200px;
  border-right: solid 1px var(--theme-border-color);
  height: 100%;
}

.nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
  .nav-icon {
    width: 20px;
    margin-right: 20px;
  }
  li {
    display: flex;
    flex: 1;
  }
  a {
    display: flex;
    align-items: center;
    flex: 1;
    text-decoration: none;
    color: var(--theme-secondary-color);
    cursor: pointer;
    padding: var(--theme-margin);
    &.router-link-active,
    &:hover {
      background: var(--theme-primary-color);
    }
  }
}
</style>