<template lang="pug">
.paper-container
  slot
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BasePaper",
});
</script>

<style scoped lang="scss">
.paper-container {
  background: var(--theme-primary-color);
  padding: var(--theme-padding);
  border-radius: var(--theme-border-radius);
  box-shadow: var(--theme-ring-shadow), var(--theme-ring-shadow),
    var(--theme-shadow);
}
</style>