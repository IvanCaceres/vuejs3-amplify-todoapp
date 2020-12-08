<template lang="pug">
.create-todo-list-container
  base-paper
    h1.create-todo-title Create Todo List
    base-input(v-model="todoListName", name="name", type="text", placeholder="Name this Todo List", label="Name", ariaPlaceholder="Example: Weekend Shopping", required)
    date-picker(:value="selectedDate", @date-picked="onDatePicked")

    h2 Tasks
    todo-list(:tasks="todoTasks", @add-todo="onAddTodo", @update-todo="onUpdateTodo", @update-todo-completed="onUpdateTodoCompleted")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import debounce from "lodash/debounce";
import TodoList from "@/components/TodoList.vue";
import DatePicker from "@/components/DatePicker.vue";

interface Methods {
  submitToAPI: any;
}

export default defineComponent({
  name: "CreateTodoList",
  components: {
    TodoList,
    DatePicker,
  },
  data() {
    return {
      id: "",
      todoListName: "",
      selectedDate: "",
      todoTasks: [],
    } as any;
  },
  watch: {
    todoListName() {
      this.debouncedSubmitToAPI();
    },
    selectedDate() {
      this.debouncedSubmitToAPI();
    },
    todoTasks() {
      this.debouncedSubmitToAPI();
    },
  },
  created() {
    if (this.$route.params.id) {
      this.id = this.$route.params.id as string;
      this.$store
        .dispatch("getTodoList", this.$route.params.id)
        .then(todoList => {
          this.todoListName = todoList.name;
          this.selectedDate = todoList.date;
          this.todoTasks = todoList.tasks;
        });
    }
  },
  methods: {
    debouncedSubmitToAPI: debounce(function() {
      const todoList = {
        name: this.todoListName,
        // ISO 8601 date string
        date: this.selectedDate ? this.selectedDate : null,
        tasks: [...this.todoTasks],
      } as any;
      if (!this.id) {
        this.$store
          .dispatch("createTodoList", { todoList })
          .then((todoListModel: any) => {
            this.id = todoListModel.id;
          });
      } else {
        todoList.id = this.id;
        this.$store.dispatch("updateTodoList", { todoList });
      }
    }, 600),
    onDatePicked(date: string) {
      this.selectedDate = date;
    },
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