<template lang="pug">
div
  calendar
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Calendar from "@/components/Calendar.vue";

export default defineComponent({
  name: "CalendarView",
  components: {
    Calendar,
  },
});
</script>

<style lang="scss">
</style>