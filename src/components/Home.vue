<template>
  <div class="bd-cont" :style="{ backgroundImage: 'url(/img/army.jpg)' }"></div>
  <div class="blending-layer"></div>
  <div class="content">
    <HeaderPart />
    <BodyPart />
    <BottomPart />
  </div>
</template>

<script>
import HeaderPart from "@/components/Header";
import BodyPart from '@/components/Body';
import BottomPart from "@/components/Bottom";

export default {
  name: 'HomePage',
  components: {
    BottomPart,
    HeaderPart,
    BodyPart
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .bd-cont {
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  .blending-layer {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: .5;
  }
  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
</style>
