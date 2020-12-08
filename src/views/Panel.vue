<template lang="pug">
.panel-view-container
  navigation-drawer
  router-view.panel-view
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavigationDrawer from "@/components/NavigationDrawer.vue";

export default defineComponent({
  name: "PanelView",
  components: {
    NavigationDrawer,
  },
});
</script>

<style lang="scss">
.panel-view-container {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
}
.panel-view {
  display: flex;
  flex-grow: 1;
  padding: var(--theme-margin);
}
</style>