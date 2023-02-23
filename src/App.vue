<template>
  <div id="app">
    <PitHeader />
    <PitNavigation />
  </div>
</template>

<script setup lang="ts">
import PitHeader from "./components/PitHeader.vue";
import PitNavigation from "./components/PitNavigation.vue";
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Gotham", Arial, Helvetica, sans-serif;
}

@font-face {
  font-family: "Gotham";
  src: url("./fonts/Gotham-Font/GothamBold.ttf");
  src: url("./fonts/Gotham-Font/GothamLight.ttf");
  src: url("./fonts/Gotham-Font/GothamMedium.ttf");
  src: url("./fonts/Gotham-Font/GothamBold.ttf");
  src: url("./fonts/Gotham-Font/GothamBook.ttf");
}
</style>
