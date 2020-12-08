<template lang="pug">
.todo-list-item-container(:class="{rounded}")
  button.check-button(v-if="type === 'create'", :class="{create: type==='create', active: modelValue}" @click="addTodo")
    fa.check-icon(v-if="modelValue", icon="plus", type="fas")
  button.check-button(v-else, :class="{checked: completed}" @click="toggleCheckButton")
    fa.check-icon(v-if="completed", icon="check", type="fas")
  base-input(
  :model-value="modelValue",
  name="create-todo",
  type="text",
  :placeholder="placeholder",
  :outline="false",
  @input="onInput($event.target.value)"
  )
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseInput from "@/components/BaseInput.vue";

export default defineComponent({
  name: "TodoListItem",
  props: {
    modelValue: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: false,
      validator: (value: string) => {
        return ["create"].includes(value);
      },
    },
    placeholder: {
      type: String,
      required: false,
    },
    rounded: {
      type: Boolean,
      default: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue", "todo-updated", "todo-toggle-completed"],
  components: {
    BaseInput,
  },
  data() {
    return {
      checked: false,
      todoContent: "",
    };
  },
  created() {
    console.log("todo list item created", this.modelValue);
  },
  methods: {
    toggleCheckButton() {
      this.$emit("todo-toggle-completed", !this.completed);
    },
    onInput(val: string) {
      // console.log("TodoListItem.vue receiving input event", val);
      this.todoContent = val;
      console.log("after setting todoContent show:", this.todoContent);
      this.$emit("todo-updated", val);
    },
    // submit() {
    //   if (this.type !== "create") {
    //     return;
    //   }
    //   this.$emit("keyup-enter");
    // },
  },
});
</script>

<style scoped lang="scss">
.todo-list-item-container {
  display: flex;
  align-items: center;
  background-color: var(--theme-background-color);
  padding: 2px 20px;

  &.rounded {
    border-radius: var(--theme-border-radius);
  }
}

.check-icon > path {
  fill: var(--theme-secondary-color);
}

.check-button {
  background: none;
  border: solid 1px var(--theme-border-color);
  border-radius: 50%;
  height: 30px;
  width: 30px;
  cursor: pointer;

  &.create {
    border: none;
    cursor: initial;
    pointer-events: none;
  }

  &.active {
    cursor: pointer;
    pointer-events: initial;
    background-color: var(--theme-button-secondary-color);
  }

  &.checked {
    opacity: 1;
    background: rgb(127, 203, 252);
    background: linear-gradient(
      120deg,
      rgba(127, 203, 252, 1) 0%,
      rgba(147, 146, 250, 1) 58%,
      rgba(170, 120, 245, 1) 100%
    );
    &:hover {
      opacity: 1;
    }
  }

  &:focus {
    outline: none;
  }

  &:hover {
    opacity: 0.6;
  }

  .check {
    width: 100%;
    height: 100%;
  }
}
</style>