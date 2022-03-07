<template>
  <div>
    <NewsServiceBar :ns-text1="NsText1" :ns-text2="NsText2" />

    <div class="test"></div>
  </div>
</template>

<script>
import NewsServiceBar from "@/components/News_ServiceBar.vue";

export default {
  name: "NeWs",

  components: { NewsServiceBar },

  data() {
    return {
      NsText1: "NEWS",
      NsText2: "스타 플래닛의 소식을 알려드립니다.",
    };
  },
};
</script>

<style>
@import "@/static/News_Service.scss";
.test {
  height: 1000px;
}
</style>
