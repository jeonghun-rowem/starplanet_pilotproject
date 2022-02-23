<template>
  <v-app>
    <HeaderBar />
    <MaIn />
    <FooterBar />
  </v-app>
</template>


<script>

import HeaderBar from './components/HeaderBar';
import MaIn from './components/Main';
import FooterBar from './components/FooterBar.vue';

export default {
  name: 'App',

  components: {
    HeaderBar,MaIn,FooterBar,
 
  },

  data: () => ({
    //
  }),
};
</script>
