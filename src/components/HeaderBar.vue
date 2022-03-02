<template>
  <v-app-bar
    dark
    app
    hide-on-scroll
    scroll-threshold="200"
    height="80"
    class="Header_bar"
  >
    <router-link to="/" class="Header_logo">
      <img src="@/assets/3.star_planet_logo.png" />
    </router-link>

    <v-spacer />

    <div class="Header_bar_text">
      <router-link to="/news" class="Header_bar_text1">NEWS</router-link>
      <router-link to="/service/cs" class="Header_bar_text2"
        >고객센터</router-link
      >
    </div>

    <v-app-bar-nav-icon class="Header_icon" />
  </v-app-bar>
</template>

<script>
export default {
  name: "HeaderBar",
};
</script>

<style>
@import "@/static/HeaderBar.css";
</style>
