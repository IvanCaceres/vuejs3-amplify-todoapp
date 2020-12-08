<template lang="pug">
.todos-container
  h1.todos-title Todo Lists
  .todos-cta Manage your todo lists or create a new todo list.

  base-button.add-button(name="add-todo-list", color="secondary", @click="$router.push('/panel/todos/create')")
    fa.add-icon(icon="plus", type="fas")
    |Add Todo List

  ul.todos-list
    p.todos-cta(v-if="todos.length < 1") There are 0 Todo Lists. Add one to get started.
    li(v-else, v-for="todoList in todoLists", @click="goToList(todoList.id)") {{ todoList.name }}
      span(v-if="todoList.date") &nbsp;[{{ todoList.date }}]
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";

export default defineComponent({
  name: "TodoslView",
  data() {
    return {
      todos: [
        {
          name: "Superbowl Party Prep List",
          date: "2/27/21",
        },
        {
          name: "Camping Preparations",
          date: "11/29/20",
        },
        {
          name: "Finals Week",
          date: "12/09/20",
        },
      ],
    };
  },
  created() {
    this.$store.dispatch("fetchTodoLists");
  },
  computed: mapState(["todoLists"]),
  methods: {
    goToList(id: string) {
      this.$router.push(`/panel/todos/view/${id}`);
    },
  },
});
</script>

<style scoped lang="scss">
.todos-container {
  display: flex;
  flex: 1;
  flex-direction: column;
}

.todos-title {
  padding: var(--theme-margin);
  margin: 0;
  padding-bottom: 0;
}
.todos-cta {
  padding: calc(var(--theme-margin) / 2) var(--theme-margin);
}

.add-icon {
  width: 20px;
  margin-right: var(--theme-padding);
}

.panel-view-container {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
}
.todos-list {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    color: var(--theme-secondary-color);
    padding: var(--theme-margin);
    cursor: pointer;
    border-bottom: solid 1px var(--theme-border-color);
    &:hover {
      background: var(--theme-primary-color);
    }
  }
}
</style>
