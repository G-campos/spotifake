<template>
  <div id="app">
    <router-view />
    <Navbar />
    <Player />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Player from "@/components/Player.vue";

export default {
  components: {
    Navbar,
    Player,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

#app {
  height: 100%;
  background-color: #000;
  font-family: "Sergoe UI", "Arial", sans-serif;
}
</style>
