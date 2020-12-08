<template lang="pug">
.create-todo-list-container
  base-paper
    h1.create-todo-title Create Todo List
    base-input(v-model="todoListName", name="name", type="text", placeholder="Name this Todo List", label="Name", ariaPlaceholder="Example: Weekend Shopping", required)
    date-picker(@focus="onFocus")

    h2 Tasks
    todo-list(:tasks="todoTasks", @add-todo="onAddTodo", @update-todo="onUpdateTodo", @update-todo-completed="onUpdateTodoCompleted")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoList from "@/components/TodoList.vue";
import DatePicker from "@/components/DatePicker.vue";

export default defineComponent({
  name: "CreateTodoList",
  components: {
    TodoList,
    DatePicker,
  },
  data() {
    return {
      todoListName: "",
      selectedDate: new Date(),
      todoTasks: [],
    };
  },
  methods: {
    onSelectDate(date: string) {
      console.log("chose date", date);
    },
    onFocus() {
      console.log("date input focused");
    },
    onAddTodo(todo: string) {
      console.log("createtodolist.vue add todo", todo);
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
      console.log("received a todo update", val, order);
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

<style scoped lang="scss">
.create-todo-list-container {
  display: flex;
  flex-direction: column;
}

.datepicker {
  color: #000;
  & > input {
    background: red;
  }
}
</style>