<template>
  <header>
    <div class="header">
      <div class="header_logo">
        <v-img
          class="header_logo_1"
          src="@/assets/3.star_planet_logo.png"
        />
      </div>

      <div class="header_menu">
        <a class="header_menu--item">
          NEWS
        </a>

        <a class="header_menu--item">
          고객센터
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
      name: 'HeaderBar',

}
</script>

<style>
  @import '@/static/HeaderBar.css';
</style>