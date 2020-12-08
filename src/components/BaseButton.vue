<template lang="pug">
.base-button-container
  button.app-button(:class="{secondary: color === 'secondary'}", :name="name", :type="type")
    slot
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseButton",
  props: {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: false,
      validator: (value: string) => {
        return ["primary", "secondary"].includes(value);
      },
    },
    type: {
      type: String,
      required: false,
      default: "button",
      validator: (value: string) => {
        return ["submit", "button"].includes(value);
      },
    },
  },
});
</script>

<style scoped lang="scss">
.base-button-container {
  margin: var(--theme-margin) auto;
}

.app-button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--theme-button-primary-color);
  padding: var(--theme-padding) 16px;
  color: var(--theme-primary-color);
  text-transform: uppercase;
  font-weight: 800;
  border-radius: var(--theme-border-radius);
  border: none;
  margin: 0 auto;
  cursor: pointer;

  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 0.8;
  }

  &.secondary {
    background-color: var(--theme-button-secondary-color);
  }
}
</style>
