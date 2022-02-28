<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="teal lighten-3"
      dark
      hide-on-scroll
      scroll-target="#scrolling-techniques-4"
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
    <v-sheet
      id="scrolling-techniques-4"
      class="overflow-y-auto"
    >
      <MaIn />
      <!-- <v-container style="height: 1000px;" /> -->
    </v-sheet>
  </v-card>
</template>

<script>

import MaIn from '@/views/Main.vue'

export default {


    name : "HeaderBarTest",

  components:{
    MaIn,
  }

}


</script>

<style>

</style>