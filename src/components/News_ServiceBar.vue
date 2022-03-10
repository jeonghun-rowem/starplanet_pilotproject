<template>
  <div>
    <div class="Ns_top">
      <div class="Ns_top_div">
        <div class="Ns_top_div_text1">
          {{ newsServiceText1 }}
        </div>
        <div class="Ns_top_div_text2"></div>
        <p class="Ns_top_div_text3">
          {{ newsServiceText2 }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsServiceBar",

  // camelCase 사용
  props: {
    newsServiceText1: {
      type: String,
      required: true,
    },
    newsServiceText2: {
      type: String,
      required: true,
    },
  },

  data() {
    return {};
  },
};
</script>

<style></style>
