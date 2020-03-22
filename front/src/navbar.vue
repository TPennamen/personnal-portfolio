<template>
  <div class="navbar" :class="{fullPage:showMenu}">
    <a class="link" @click="closeMenu">
      <router-link to="/">Home</router-link>
    </a>
    <a class="link" @click="closeMenu">
      <router-link to="/about">About</router-link>
    </a>
    <a class="link" @click="closeMenu">
      <router-link to="/projects">My projects</router-link>
    </a>
    <a class="link" @click="closeMenu">
      <router-link to="/contact">Contact</router-link>
    </a>
    <a class="menu" :style="{'opacity:0':showMenu, 'opacity:1':!showMenu}" @click="menuToggle">
      <span v-if="!showMenu" class="mdi mdi-menu"></span>
      <span v-else class="mdi mdi-close"></span>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false
    };
  },
  methods: {
    menuToggle() {
      this.showMenu = !this.showMenu;
    },
    closeMenu() {
      this.showMenu = false;
    }
  }
};
</script>

<style>
</style>