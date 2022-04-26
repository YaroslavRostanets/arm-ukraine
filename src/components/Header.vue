<template>
  <div class="header">
    <div data-v-3f201a4c="" class="header__title">
      <a href="/">#armUkraine</a>
      <a href="mailto:rostanets2@gmail.com" class="mail-icon">
        <i class="fa fa-envelope-o" aria-hidden="true"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderPart"
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  z-index: 5;
  padding: 5.6rem 7rem 0 7rem;
}
.header__title {
  display: flex;
  justify-content: space-between;
  width: 100%;
  a {
    color: #ffffff;
  }
}

</style>
