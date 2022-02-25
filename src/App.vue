<template>
  <v-app>
    <HeaderBar />
    <MaIn />
    <FooterBar />
    <ScrollUp />
  </v-app>
</template>


<script>

import HeaderBar from '@/components/HeaderBar';
import MaIn from '@/components/Main';
import FooterBar from '@/components/FooterBar';
import ScrollUp from '@/components/ScrollUp';

export default {
  name: 'App',

  components: {
    HeaderBar,MaIn,FooterBar,ScrollUp,
 
  },

  data: () => ({
    //
  }),
};
</script>
