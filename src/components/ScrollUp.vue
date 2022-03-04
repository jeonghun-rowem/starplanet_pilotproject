<template>
  <div class="scrollup" @click="scrollup()"></div>
</template>

<script>
export default {
  name: "ScrollUp",

  methods: {
    // 스크롤 위치 최상단으로 보내기 behavior: "smooth"를 사용한 부드러운 이동
    scrollup() {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    },
  },
};
</script>

<style>
.scrollup {
  background-color: black;
  width: 60px;
  height: 60px;
  border-radius: 50px;
  bottom: 20px;
  position: fixed;
  right: 0;
  bottom: 0;
  margin-right: 20px;
  margin-bottom: 20px;
  z-index: 999;
  cursor: pointer;
  opacity: 60%;
  background-image: url("@/assets/21.top_btn_arrow.svg");
  background-position: center center;
}
</style>
