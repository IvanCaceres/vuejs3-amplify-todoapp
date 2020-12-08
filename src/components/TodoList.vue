<template lang="pug">
.todo-list-container
  todo-list-item(:model-value="todo", type="create", placeholder="Create a new todo task...", @keyup.enter="addTodo", @add-todo="addTodo" @todo-updated="createTodoUpdate($event)")

  .list-items-container
    p(v-if="tasks.length < 1") No tasks added yet.
    todo-list-item.list-item(v-for="(task, index) in filteredTasks", :model-value="task.value", :completed="task.completed", :rounded="false", @todo-updated="todoTaskUpdate($event, index)", @todo-toggle-completed="todoToggleCompleted($event, index)")

    .status-footer
      .tasks-left
        p {{ tasksLeft }} tasks left
      .filters-container
        base-button(:class="{active: currentFilter === 'all'}", name="filter-all-button" @click="chooseActiveFilter('all')") All
        base-button(:class="{active: currentFilter === 'active'}", name="filter-acive-button", @click="chooseActiveFilter('active')") Active
        base-button(:class="{active: currentFilter === 'completed'}", name="filter-completed-button", @click="chooseActiveFilter('completed')") Completed
      //- .clear-completed
      //-   base-button(name="clear-completed-tasks") Clear Completed
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BasePaper from "@/components/BasePaper.vue";
import TodoListItem from "@/components/TodoListItem.vue";
import BaseButton from "@/components/BaseButton.vue";

export default defineComponent({
  name: "TodoList",
  components: {
    BaseButton,
    BasePaper,
    TodoListItem,
  },
  props: {
    tasks: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  emits: ["add-todo", "update-todo", "update-todo-completed"],
  data() {
    return {
      currentFilter: "all",
      todo: "",
    };
  },
  computed: {
    tasksLeft(): number {
      return this.tasks.filter((task: any) => !task.completed).length;
    },
    filteredTasks(): Array<any> {
      return this.tasks.filter((task: any) => {
        if (this.currentFilter === "active") {
          return !task.completed;
        } else if (this.currentFilter === "completed") {
          return task.completed;
        } else {
          return true;
        }
      });
    },
  },
  methods: {
    chooseActiveFilter(filter: string) {
      this.currentFilter = filter;
    },
    addTodo() {
      this.$emit("add-todo", this.todo);
      this.todo = "";
    },
    createTodoUpdate(val: string) {
      this.todo = val;
    },
    todoTaskUpdate(val: string, order: number) {
      this.$emit("update-todo", { val, order });
    },
    todoToggleCompleted(completed: boolean, order: number) {
      this.$emit("update-todo-completed", { completed, order });
    },
  },
});
</script>

<style scoped lang="scss">
.list-items-container {
  margin-top: 30px;
}

.list-item {
  border-bottom: solid 1px var(--theme-border-color);
}

.round-top {
  border-top-left-radius: var(--theme-border-radius);
  border-top-right-radius: var(--theme-border-radius);
}

.round-bottom {
  border-bottom-left-radius: var(--theme-border-radius);
  border-bottom-right-radius: var(--theme-border-radius);
}

.filters-container {
  display: flex;
  & > .base-button-container {
    margin-left: var(--theme-padding);
    opacity: 0.5;

    &.active {
      opacity: 1;
    }

    &:nth-of-type(1) {
      margin-left: 0;
    }

    button {
      margin: 0;
    }
  }
}

.status-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--theme-background-color);
  color: var(--theme-placeholder-color);
  padding: 0 var(--theme-margin);

  & > div {
    margin-left: 40px;
    &:nth-of-type(1) {
      margin-left: 0;
    }
  }
}
</style>