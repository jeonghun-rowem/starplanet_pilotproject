<template>
  <div>
    <NewsServiceBar :ns-text1="NsText1" :ns-text2="NsText2" />

    <div class="service_CsFaq_btn">
      <router-link :to="{ name: 'ServiceCs' }" class="CsFaq_btn"
        >1:1문의</router-link
      >
      <router-link :to="{ name: 'ServiceFaq' }" class="CsFaq_btn"
        >FAQ</router-link
      >
    </div>
    <div class="test"></div>
    <router-view />
  </div>
</template>

<script>
import NewsServiceBar from "@/components/News_ServiceBar.vue";

export default {
  name: "ServiceView",

  components: {
    NewsServiceBar,
  },

  data() {
    return {
      NsText1: "고객센터",
      NsText2: "안녕하세요. 스타 플래닛 고객님, 무엇을 도와드릴까요?",
    };
  },
};
</script>

// 지역 변수로 설정
<style lang="scss" scoped>
@import "@/static/News_Service.scss";
@import "@/static/Service.scss";

.service_CsFaq_btn > .router-link-exact-active {
  background-color: rgb(255 75 113);
}
</style>
