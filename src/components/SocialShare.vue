<template>
  <div class="share">
    <div class="prelog">
      Share:
    </div>
    <ShareNetwork
        v-for="network in networks"
        :key="network.title"
        :network="network.title"
        url="https://arm-ukraine.com/"
        title="Arm Ukraine"
        description="How to help the army of Ukraine"
    >
      <div class="icon-wrap">
        <i class="fa" :class="network.icon"></i>
      </div>
      {{ network.title }}
    </ShareNetwork>
  </div>
</template>

<script>
export default {
  name: "SocialShare",
  data() {
    return {
      networks: [{
        title: 'facebook',
        icon: 'fa-facebook'
      }, {
        title: 'twitter',
        icon: 'fa-twitter'
      }, {
        title: 'WhatsApp',
        icon: 'fa-whatsapp'
      }, {
        title: 'Telegram',
        icon: 'fa-telegram'
      }],
      title: 'title',
      description: 'description'
    }
  }
}
</script>

<style lang="scss" scoped>
  .prelog {
    margin-right: 10px;
  }
</style>
