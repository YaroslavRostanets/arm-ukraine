<template>
  <vue-final-modal v-model="isShow" @closed="$emit('closed')" classes="modal-container" content-class="modal-content">
    <iframe frameborder="0" allowtransparency="true" allowpaymentrequest="true" allow="payment" scrolling="no"
            style="width: 100%; height: 620px; background-color: transparent;"
            src="https://www.liqpay.ua/en/checkoutjs?hostname=bank.gov.ua&amp;port=&amp;protocol=https%3A&amp;uid=1650997941725&amp;data=eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXlkb25hdGUiLCJhbW91bnQiOiIwIiwiY3VycmVuY3kiOiJVQUgiLCJkZXNjcmlwdGlvbiI6ItCX0LHRltGAINC60L7RiNGC0ZbQsiDQvdCwINC%2F0L7RgtGA0LXQsdC4INCw0YDQvNGW0Zcg0KPQutGA0LDRl9C90LgiLCJwdWJsaWNfa2V5IjoiaTE3NDcyMDU5OTY0IiwibGFuZ3VhZ2UiOiJ1ayJ9&amp;signature=XxmpvLEi%2FWtuWyzvF3thmiPDLyY%3D&amp;embedTo=%23liqpay_checkout&amp;language=uk&amp;mode=embed"></iframe>
  </vue-final-modal>
</template>

<script>
import {VueFinalModal} from 'vue-final-modal'

export default {
  name: "PayModal",
  props: {
    showModal: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      isShow: this.showModal
    }
  },
  watch: {
    showModal(val) {
      if (val) {
        this.isShow = val;
      }
    }
  },
  components: {
    VueFinalModal
  }
}
</script>

<style scoped>
.dark-mode div::v-deep .modal-content {
  border-color: #2d3748;
  background-color: #1a202c;
}

::v-deep .modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

::v-deep .modal-content {
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
}

.modal__title {
  font-size: 1.5rem;
  font-weight: 700;
}
</style>
