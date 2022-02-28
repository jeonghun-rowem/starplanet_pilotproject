<template>
  <div>
    <HeaderBar />
    
    <v-main id="appMain">
      <router-view />
    </v-main>
  </div>
</template>
<script>
import HeaderBar from '@/components/HeaderBar';


export default {
  name: 'HeaderView',
  components: {
    HeaderBar
  },

  data: () => ({
    //
  }),
};
</script>
