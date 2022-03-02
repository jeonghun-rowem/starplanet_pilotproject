<template>
  <div>
    <HeaderBar />
    <v-main id="appMain" :class="{ 'pt-0': isMainPage }">
      <router-view />
    </v-main>
  </div>
</template>
<script>
import HeaderBar from "@/components/HeaderBar.vue";

export default {
  name: "HeaderView",
  components: {
    HeaderBar,
  },

  data: () => ({
    //
  }),

  computed: {
    isMainPage() {
      return this.$route.name === "Main";
    },
  },
};
</script>
