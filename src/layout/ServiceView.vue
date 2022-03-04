<template>
  <div>
    <div class="Ns_top">
      <div class="Ns_top_div">
        <div class="Ns_top_div_text1 Ns_top_div_text1_2">고객센터</div>
        <div class="Ns_top_div_text2"></div>
        <p class="Ns_top_div_text3">
          안녕하세요. 스타 플래닛 고객님, 무엇을 도와드릴까요?
        </p>
      </div>
    </div>

    <div class="service_CsFaq_btn">
      <router-link :to="{ name: 'ServiceCs' }" class="CsFaq_btn"
        >1:1문의</router-link
      >

      <router-link :to="{ name: 'ServiceFaq' }" class="CsFaq_btn"
        >FAQ</router-link
      >
    </div>

    <router-view />
  </div>
</template>
<script>
export default {
  name: "ServiceView",

  data: () => ({}),
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
