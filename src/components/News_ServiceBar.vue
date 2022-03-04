<template>
  <div>
    <div class="Ns_top">
      <div class="Ns_top_div">
        <div class="Ns_top_div_text1">
          {{ NsText1 }}
        </div>
        <div class="Ns_top_div_text2"></div>
        <p class="Ns_top_div_text3">
          {{ NsText2 }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsServiceBar",

  data() {
    return {};
  },

  props: {
    NsText1: String,
    NsText2: String,
  },
};
</script>

<style></style>
