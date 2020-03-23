<template>
  <section>
    <div class="home">
      <h1 class="home-title">Welcome to Thomas Pennamen's portfolio</h1>
      <div class="project-sender-button" @click="sendToProjects">
        <p>Click to see my projects</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    sendToProjects() {
      this.$router.push("/projects");
    }
  }
};
</script>

<style>
</style>