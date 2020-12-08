<template lang="pug">
.calendar-component-container
  .calendar-controls
    base-button(name="previous-month", type="button", @click="previousMonth")
      fa.direction-button(icon="less-than", type="fas")
    h3
      |{{ month }}
    base-button(name="next-month", type="button", @click="nextMonth")
      fa.direction-button(icon="greater-than", type="fas")

  .calendar-container
    .day(v-for="n in days", @click="pickDate(n)")
      .day-number {{ n }}
</template>

<script lang="ts">
import { defineComponent } from "vue";

const MonthDays = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
} as any;

const MonthNames = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
} as any;

export default defineComponent({
  name: "Calendar",
  data() {
    return {
      currentDate: new Date(),
      currentMonth: 1,
    } as any;
  },
  emits: ["date-picked"],
  created() {
    this.currentMonth = this.currentDate.getMonth() + 1;
  },
  computed: {
    days(): number {
      return MonthDays[this.currentMonth];
    },
    month(): string {
      return MonthNames[this.currentMonth];
    },
  },
  methods: {
    previousMonth() {
      let newMonth = this.currentMonth - 1;

      if (newMonth < 1) {
        newMonth = 12;
      }

      if (newMonth > 12) {
        newMonth = 1;
      }

      this.currentMonth = newMonth;
    },
    nextMonth() {
      let newMonth = this.currentMonth + 1;

      if (newMonth < 1) {
        newMonth = 12;
      }

      if (newMonth > 12) {
        newMonth = 1;
      }

      this.currentMonth = newMonth;
    },
    pickDate(day: number) {
      const dateString = `${this.currentDate.getFullYear()}-${
        this.currentMonth < 10 ? 0 : ""
      }${this.currentMonth}-${day < 10 ? 0 : ""}${day}`;
      this.$emit("date-picked", dateString);
    },
  },
});
</script>

<style lang="scss">
.calendar-component-container {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.calendar-controls {
  display: flex;
  align-items: center;
}

.calendar-container {
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  flex: 1;
}

.direction-button {
  width: 14px;
}

.day {
  border: solid 1px var(--theme-border-color);
  flex-basis: 10%;
  box-sizing: border-box;
  cursor: pointer;
  font-weight: 800;
  &:hover {
    background-color: var(--theme-primary-color);
  }
}

.day-number {
  padding: var(--theme-padding);
}
</style>