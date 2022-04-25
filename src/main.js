import { createApp } from 'vue'
import VueSocialSharing from 'vue-social-sharing'
import App from './App.vue'
import './assets/scss/main.scss'
import './assets/css/font-awesome.min.css'

const app = createApp(App)
app.use(VueSocialSharing)
app.mount('#app')
