// import 'bootstrap';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // 引入 Bootstrap JS 和 Popper.js
// import * as bootstrap from 'bootstrap'
import './assets/scss/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import BootstrapPlugin from './plugins/bootstrap';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(BootstrapPlugin);

app.mount('#app')
