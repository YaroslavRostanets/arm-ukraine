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
        title="Тайтл"
        description="дескріпшн"
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
  .share {
    margin-top: 2rem;
    display: flex;
    .icon-wrap {
      background: rgba(255, 255, 255, 0.3);
      width: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 4px;
    }
    a {
      border: 1px solid #FFFFFF;
      font-size: 1rem;
      text-decoration: none;
      margin-right: 8px;
      color: #FFFFFF;
      display: flex;
      padding-right: 5px;
    }
  }
  .prelog {
    margin-right: 10px;
  }
</style>
