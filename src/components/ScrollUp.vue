<template>
  <div class="scrollup" />
</template>

<script>
export default {
    name : 'ScrollUp'
}
</script>

<style>

.scrollup{
  background-color: black;
  width:60px;
  height:60px;
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
    }
    
</style>