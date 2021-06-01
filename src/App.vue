<template>
  <div id="app">
    <home />
  </div>
</template>

<script>
import Home from "./pages/Home/Home.vue";

export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style lang="scss">
#app {
  direction: rtl;
  overflow-x: hidden;
}
* {
  font-family: "Almarai", sans-serif;
}


::-webkit-scrollbar {
    width: 11px;
}

::-webkit-scrollbar-track {
    background: $offwhite;
    border-radius: 20px;
}
::-webkit-scrollbar-thumb {
    background-color: $primary;
    border-radius: 20px;

}






</style>
