<template lang="pug">
.date-picker-container
  base-input(v-model="dateString", name="date", type="text", placeholder="Choose a date", label="Date", ariaPlaceholder="Example: Pick a date for this Todo List", @focus="onFocus", required)
  .popup-calendar-container(v-if="calendarPopupVisible")
    base-paper
      calendar(@date-picked="onDatePicked")
      base-button(name="close-calendar-popup", @click="onClose") Close
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Calendar from "@/components/Calendar.vue";

export default defineComponent({
  name: "DatePicker",
  components: {
    Calendar,
  },
  props: {
    value: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      dateString: "",
      calendarPopupVisible: false,
    };
  },
  watch: {
    value() {
      if (this.value) {
        this.dateString = this.value;
      } else {
        this.dateString = "";
      }
    },
  },
  emits: ["date-picked"],
  methods: {
    onFocus() {
      this.calendarPopupVisible = true;
    },
    onClose() {
      this.calendarPopupVisible = false;
    },
    onDatePicked(date: string) {
      this.dateString = date;
      this.calendarPopupVisible = false;
      this.$emit("date-picked", date);
    },
  },
});
</script>

<style scoped lang="scss">
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  opacity: 0;
}

.date-picker-container {
  position: relative;
}

.popup-calendar-container {
  position: absolute;
  max-width: 30vw;
}
</style>
