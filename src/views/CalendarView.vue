<template lang="pug">
div
  calendar(:todoLists="todoLists")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";
import Calendar from "@/components/Calendar.vue";

export default defineComponent({
  name: "CalendarView",
  components: {
    Calendar,
  },
  computed: mapState(["todoLists"]),
  created() {
    this.$store.dispatch("fetchTodoLists");
  },
});
</script>

<style lang="scss">
</style>