<template>
  <v-app id="app">
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",

  // 페이지 이동 시 스크롤 최상단으로 항상 고정
  watch: {
    $route() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
