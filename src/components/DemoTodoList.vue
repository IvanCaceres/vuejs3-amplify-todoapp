<template lang="pug">
div
  todo-list(:tasks="todoTasks", @add-todo="onAddTodo", @update-todo="onUpdateTodo", @update-todo-completed="onUpdateTodoCompleted")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoList from "@/components/TodoList.vue";

export default defineComponent({
  name: "DemoTodoList",
  components: {
    TodoList,
  },
  data() {
    return {
      todoTasks: [
        {
          value:
            "Complete Vue.js 3 / GraphQL / Typescript / AWS Amplify Application",
          completed: true,
        },
        {
          value: "Walk the dogs",
          completed: false,
        },
        {
          value: "Put away groceries",
          completed: false,
        },
        {
          value: "Read for 2 hours",
          completed: false,
        },
        {
          value: "Build LEGO Millenium Falcon",
          completed: false,
        },
        {
          value: "Buy more books",
          completed: false,
        },
      ],
    };
  },
  methods: {
    onAddTodo(todo: string) {
      this.todoTasks = [
        ...this.todoTasks,
        {
          value: todo,
          completed: false,
        },
      ];
    },
    onUpdateTodo({ val, order }: any) {
      this.todoTasks = this.todoTasks.map((todo: any, index: number) => {
        if (index === order) {
          return {
            ...todo,
            value: val,
          };
        }
        return todo;
      });
    },
    onUpdateTodoCompleted({ completed, order }: any) {
      this.todoTasks = this.todoTasks.map((todo: any, index: number) => {
        if (index === order) {
          return {
            ...todo,
            completed,
          };
        }
        return todo;
      });
    },
  },
});
</script>

<style lang="scss">
</style>