import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'fullpage.js';
import VueFullpage from 'vue-fullpage.js'


createApp(App).use(VueFullpage).mount('#app')
