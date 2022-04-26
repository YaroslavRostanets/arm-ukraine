<template>
  <div v-for="(image, index) in images" :key="index"
       class="bd-cont"
       :class="{'fade-in': index === currentImgIndex, 'fade-out': index !== currentImgIndex}"
       :style="{ backgroundImage: `url(${image})` }"></div>
</template>

<script>
export default {
  name: "BackgroundPart",
  data() {
    return {
      interval: 8000,
      currentImgIndex: 0,
      images: [
          '/img/army.jpg',
          '/img/army2.jpg',
          '/img/army3.jpg'
      ]
    }
  },
  mounted() {
    setInterval(() => {
      this.currentImgIndex = this.images[++this.currentImgIndex] ? this.currentImgIndex + 1 : 0;
    }, this.interval)
  }
}
</script>

<style lang="scss" scoped>
.bd-cont {
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  // animation: fadein 2s;
  background-size: cover;
  transition: opacity 2s ease;
}
.fade-out {
  opacity: 0;
}
@keyframes fadein {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes fadeOut {
  from { opacity: 1; }
  to   { opacity: 0; }
}
</style>
