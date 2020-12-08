<template lang="pug">
.header-container
  .header-background-container
    picture
      source(srcset="@/assets/header1.webp" type="image/webp")
      //- alt="" accessibility indicates this content is only decoration to screen readers / non visual browsers
      img.header-background(src="@/assets/header1.jpg" alt="")
  #nav
    router-link(to="/") Home
    router-link(to="/about") About
  p HEADER
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppHeader",
});
</script>

<style scoped lang="scss">
.header-container {
  width: 100vw;
  height: 24vh;
  background: orange;
  position: relative;
}

.header-background-container {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.header-background {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
