<template>
  <div>
    <HeaderBar />
    <v-main id="appMain" :class="{ 'pt-0': isMainPage }">
      <router-view />
    </v-main>
    <FooterBar />
    <ScrollUp />
  </div>
</template>
<script>
import HeaderBar from "@/components/HeaderBar.vue";
import FooterBar from "@/components/FooterBar.vue";
import ScrollUp from "@/components/ScrollUp.vue";

export default {
  name: "HeaderView",
  components: {
    HeaderBar,
    FooterBar,
    ScrollUp,
  },

  data: () => ({
    //
  }),

  computed: {
    isMainPage() {
      return this.$route.name === "Main";
    },

    // HeaderColor() {
    //   return this.$route.name === "ServiceCs" || "ServiceFaq" || "NeWs";
    // },
  },
};
</script>

<style></style>
