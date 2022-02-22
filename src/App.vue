<template>
  <v-app>
    <HeaderBar />
    <MaIn />
  </v-app>
</template>


<script>

import HeaderBar from './components/HeaderBar';
import MaIn from './components/main';

export default {
  name: 'App',

  components: {
    HeaderBar,MaIn,
 
  },

  data: () => ({
    //
  }),
};
</script>
