<template lang="pug">
.base-input-container
  label.input-label(v-if="outline", for="user-email") {{ label }} 
    span.input-aria-placeholder(id="user-email-hint", class="input-hint") ({{ ariaPlaceholder }})
  .input-container(:class="{ outlined: outline, 'focused': focused }")
    textarea(v-if="type === 'textarea'", :name="name", :placeholder="placeholder", rows=4, @focus="onFocus", @blur="onBlur")
    input(v-else, :value="modelValue", @input="$emit('update:modelValue', $event.target.value)", :type="type", :name="name", :placeholder="placeholder", @focus="onFocus", @blur="onBlur", :autocomplete="autocomplete", @keyup.enter="$emit('keyup:enter')", :required="required")
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseInput",
  props: {
    modelValue: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      validator: (value: string) => {
        return [
          "text",
          "number",
          "textarea",
          "tel",
          "url",
          "email",
          "password",
        ].includes(value);
      },
    },
    label: {
      type: String,
      required: false,
    },
    ariaPlaceholder: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
    outline: {
      type: Boolean,
      required: false,
      default: true,
    },
    autocomplete: {
      type: String,
      required: false,
    },
    required: {
      type: Boolean,
      required: false,
    },
  },
  emits: ["update:modelValue", "keyup:enter", "focus", "blur"],
  data() {
    return {
      focused: false,
    };
  },
  methods: {
    onFocus(event: FocusEvent) {
      this.focused = true;
      this.$emit("focus");
    },
    onBlur() {
      this.focused = false;
      this.$emit("blur");
    },
  },
});
</script>

<style scoped lang="scss">
.base-input-container {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.input-label,
.input-aria-placeholder {
  margin: var(--theme-padding) 0;
}

.input-container {
  border-radius: var(--theme-border-radius);
  display: flex;
  background-color: var(--theme-background-color);

  margin: var(--theme-padding) 0;
  input,
  textarea {
    flex: 1;
    background: transparent;
    border: none;
    padding: 1.125rem 0.875rem;
    font-family: var(--theme-font-family);
    font-size: var(--theme-base-font-size);
    color: var(--theme-secondary-color);
    &::placeholder {
      color: var(--theme-placeholder-color);
    }
  }
  input:focus,
  textarea:focus {
    outline: none;
  }
  &.outlined {
    border-color: var(--theme-border-color);
    border-style: solid;
    border-width: 2px;
  }
  &.focused {
    border-color: #1976d2;
  }
}
</style>
