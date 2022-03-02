<template>
  <div>
    <router-link :to="{ name: 'ServiceCs' }">CS</router-link>
    <router-link to="faq">FAQ</router-link>
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
