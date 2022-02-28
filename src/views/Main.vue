<template>
  <div>
    <!-- <HeaderBar /> -->
    <!-- <HeaderBarTest /> -->

    <div class="first_m">
      <v-img
        class="first_m_starpass_logo"
        src="@/assets/1.starpass_logo.png"
        height="230px"
        contain
      />

      <v-img
        class="first_m_star_plannet"
        src="@/assets/2.star_planet.png"
        height="100px"
        contain
      />
      <div class="first_m_text1">
        <p>K-Pop, 트로트 팬덤을 위한 <span class="first_m_text1_2">글로벌 플랫폼</span>!</p>
      </div>
      <div class="first_m_text2">
        <p>안드로이드,iOS 모두 지원</p>
      </div>
      <div class="app_button">
        <a
          href="https://play.google.com/store/apps/details?id=inc.rowem.passicon&hl=ko"
          target="_blank" 
        >
          <v-img
            src="@/assets/16.google_btn.png"
            max-width="250px"
            contain
          />
        </a>
        <a
          href="https://apps.apple.com/kr/app/id1377584935"
          target="_blank"
        >
          <v-img
            src="@/assets/17.appstore_btn.png"
            max-width="250px"
            contain
          />
        </a>
      </div>
    </div>
    <div class="second_m">
      <div class="second_m_img1">
        <img
          src="@/assets/5.sbs_mtv.png"
          class="second_m_img1_1"
        > 사전 • 실시간 투표

        <div class="second_m_img2">
          <v-img
            src="@/assets/6.the_show.png"
            class="second_m_img2_1"
          />
          <v-img
            src="@/assets/4.the_trotshow.png"
            class="second_m_img2_2"
          />
        </div>
        <div class="second_m_text1">
          <span>
            엎치락뒤치락! 열띤 사전투표와
            <br>
            생방송에 참여하는 실시간 투표까지 스타플래닛에서
          </span>
        </div>
        <div class="second_m_text2">
          <span class="second_m_text2_1">더 쇼, 더 트롯쇼</span>
          <span class="second_m_text2_2">사전/실시간 투표 진행!</span>
        </div>
      </div>

      <div class="second_m_img3">
        <img
          src="@/assets/11.phone1.png"
          class="second_m_img3_1"
        >
      </div>
    </div>
    <div class="third_m">
      <v-img
        class="third_m_starpass_logo"
        src="@/assets/1.starpass_logo.png"
      />
      
      <v-img
        class="third_m_star_plannet"
        src="@/assets/2.star_planet.png"
      />
      <div class="third_m_text1">
        <p class="third_m_text1_1">
          K-pop, Trot with STAR PLANET
        </p>
        <p class="third_m_text1_2">
          Available on
          <span class="third_m_text1_3">
            Android
            <span class="third_m_text1_4">and </span>
            <span class="third_m_text1_5">iOS</span>
          </span>
        </p>
      </div>
      <div class="app_button app_button_2">
        <a
          href="https://play.google.com/store/apps/details?id=inc.rowem.passicon&hl=ko"
          target="_blank"
        >
          <v-img
            src="@/assets/16.google_btn.png"
            max-width="250px"
            contain
          />
        </a>
        <a
          href="https://apps.apple.com/kr/app/id1377584935"
          target="_blank"
        >
          <v-img
            src="@/assets/17.appstore_btn.png"
            max-width="250px"
            contain
          />
        </a>
      </div>
    </div>

    <FooterBar />
    <ScrollUp />
  </div>
</template>

<script>

// import HeaderBar from '@/components/HeaderBar';
import FooterBar from '@/components/FooterBar';
import ScrollUp from '@/components/ScrollUp';
// import HeaderBarTest from '@/components/HeaderBarTest'

export default {
    name : 'MaIn',

     components: {
    FooterBar,ScrollUp,
 
  },
}
</script>

<style>
@import '@/static/Main.css';
</style>