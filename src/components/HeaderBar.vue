<template>
  <v-app-bar
    app
    color="teal lighten-3"
    dark
    hide-on-scroll
    scroll-threshold="50"
  >
    <v-app-bar-nav-icon />

    <v-toolbar-title>Title</v-toolbar-title>

    <v-spacer />

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>


export default {
      name: 'HeaderBar',

}
</script>

<style>
  @import '@/static/HeaderBar.css';
</style>