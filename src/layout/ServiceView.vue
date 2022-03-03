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
      <div class="service_Cs_btn CsFaq_btn">
        <router-link :to="{ name: 'ServiceCs' }">1:1문의</router-link>
      </div>
      <div class="service_Faq_btn CsFaq_btn">
        <router-link :to="{ name: 'ServiceFaq' }">FAQ</router-link>
      </div>
    </div>

    <router-view />
  </div>
</template>
<script>
export default {
  name: "ServiceView",

  data: () => ({
    //
  }),
};
</script>

<style>
@import "@/static/News_Service.css";
@import "@/static/Service.css";

.router-link-exact-active {
  background-color: rgb(255, 70, 131);
}
</style>
