<template>
  <div>
    <div class="button-wrap">
      <div class="zsu-logo">
        <img src="/img/zsu_logo.svg" alt="logo">
      </div>
      <button class="arm-button">
        support financially
      </button>
    </div>
    <div class="text">
      On March 24, Russia launched a large-scale invasion of Ukraine along the entire valley of the cordon and from the territory of Belarus.
      Ukraine to repair the baked opera. It’s a pity to wage war at an extremely high cost. In Russia, there are more resources for waging war.
      We want to live in our own country, so we have the strength to defend ourselves.
      On the 24th of February, the National Bank opened a special fundraiser for the collection of coins to support the Defense Forces of Ukraine.
      To my dermal one, who knows the ability to support the Ukrainian Army. Appreciate your support, it’s more important at this hour.
      I seem to be at the Zbroyna Forces of Ukraine at once.
      If you do not trust this website, make a donation on
      <a href="https://bank.gov.ua/ua/news/all/natsionalniy-bank-vidkriv-rahunok-dlya-gumanitarnoyi-dopomogi-ukrayintsyam-postrajdalim-vid-rosiyskoyi-agresiyi">
        the official website of the National Bank of Ukraine
      </a>
      So repost is in social networks.
      <SocialShare />
    </div>
  </div>
</template>

<script>
import SocialShare from "@/components/SocialShare";
export default {
  name: "BodyPart",
  components: {
    SocialShare
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
