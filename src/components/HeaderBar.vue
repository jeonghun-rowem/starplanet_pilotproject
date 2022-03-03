<template>
  <div>
    <v-app-bar
      dark
      app
      hide-on-scroll
      scroll-threshold="150"
      height="80"
      dense
      class="Header_bar"
    >
      <router-link to="/" class="Header_logo">
        <img src="@/assets/3.star_planet_logo.png" />
      </router-link>

      <v-spacer />

      <div class="Header_bar_text">
        <router-link :to="{ name: 'News' }" class="Header_bar_text1"
          >NEWS</router-link
        >
        <router-link :to="{ name: 'ServiceCs' }" class="Header_bar_text2"
          >고객센터</router-link
        >
      </div>

      <v-app-bar-nav-icon class="Header_icon" @click="drawer = true" />
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary width="500">
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
          class="Header_list_group"
        >
          <v-list-item class="Header_list_group_text1">
            <div>
              <router-link :to="{ name: 'News' }" class="Header_bar_text1"
                >NEWS</router-link
              >
            </div>
          </v-list-item>

          <v-list-item class="Header_list_group_text1">
            <div>
              <router-link :to="{ name: 'ServiceCs' }">고객센터</router-link>
            </div>
          </v-list-item>

          <v-list-item class="Header_list_group_text2">
            <div>
              <router-link :to="{ name: 'ServiceCs' }">-1:1문의</router-link>
            </div>
          </v-list-item>

          <v-list-item class="Header_list_group_text2">
            <div>
              <router-link :to="{ name: 'ServiceFaq' }">-FAQ</router-link>
            </div>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <div class="Header_list_img">
        <a
          href="https://play.google.com/store/apps/details?id=inc.rowem.passicon&hl=ko"
          target="_blank"
        >
          <img src="@/assets/19.menu_googleplay.png" />
        </a>
        <a href="https://apps.apple.com/kr/app/id1377584935" target="_blank">
          <img src="@/assets/20.menu_appstore.png" />
        </a>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "HeaderBar",

  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

<style>
@import "@/static/HeaderBar.css";
</style>
