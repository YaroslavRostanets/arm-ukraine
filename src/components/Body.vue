<template>
  <div>
    <div class="button-wrap">
      <div class="zsu-logo">
        <img src="/img/zsu_logo.svg" alt="logo">
      </div>
      <button @click="showModal" class="arm-button">
        support financially
      </button>
    </div>
    <div class="text">
      On February 24, Russia launched a large-scale invasion of Ukraine along the entire valley of the cordon and from the territory of Belarus.
      The Armed Forces of Ukraine are fighting bravely.
      But waging a full-scale war with the world's largest country is very expensive.
      We want to live in our own country, therefore we are forced to defend ourselves.
      Russian troops rape women and children, kill civilians and commit other war crimes.
      The National Bank of Ukraine opened a special account to raise funds to support the armed forces of Ukraine.
      Every euro or dollar you donate can save someone's life and bring our victory closer.
      We appreciate your support.
      <p>
        If you do not trust this site, make a donation
        <a href="https://bank.gov.ua/ua/news/all/natsionalniy-bank-vidkriv-rahunok-dlya-gumanitarnoyi-dopomogi-ukrayintsyam-postrajdalim-vid-rosiyskoyi-agresiyi">
          the official website of the National Bank of Ukraine
        </a>.
      </p>
      <p>
        We will be grateful for the distribution in social networks
      </p>
      <SocialShare />
    </div>
    <PayModal :show-modal="isShowModal" @closed="closeModal" />
  </div>
</template>

<script>
import SocialShare from "@/components/SocialShare";
import PayModal from "@/components/PayModal";
export default {
  name: "BodyPart",
  components: {
    SocialShare,
    PayModal
  },
  data() {
    return {
      isShowModal: false
    }
  },
  methods: {
    showModal() {
      this.isShowModal = true;
    },
    closeModal() {
      this.isShowModal = false;
    }
  }
}
</script>

<style lang="scss" scoped>
  .zsu-logo {
    width: 100px;
    margin-right: 45px;
    img {
      display: block;
      max-width: 100%;
      max-height: 100%;
    }
  }
  .button-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 4rem 0;
  }
  .text {
    color: #FFFFFF;
    width: 80%;
    max-width: 1200px;
    text-align: left;
    margin: 0 auto;
    padding: 2rem;
    background: rgba(0, 0, 0, 0.7);
    font-size: 1.3rem;
    line-height: 1.75rem;
    a {
      color: #FFFFFF;
    }
  }
  .arm-button {
    background: transparent;
    border: 2px solid #FFFFFF;
    color: #FFFFFF;
    text-transform: uppercase;
    font-size: 1.2rem;
    padding: 0.4rem;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
      background: #FFFFFF;
      color: #2c3e50;
    }
  }
</style>
