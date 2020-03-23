<template>
  <div id="app">
    <navbar @clicked="showMenu" />
    <section v-if="menuShowed" class="main">
      <router-view />
    </section>
  </div>
</template>

<script>
import Navbar from "@/navbar";
export default {
  data() {
    return {
      menuShowed: true
    };
  },
  methods: {
    showMenu(menuShowed) {
      this.menuShowed = menuShowed;
    }
  },
  components: { Navbar }
};
</script>

<style lang="css">
@import "style/style.css";
</style>
