import './assets/index.css'
import "bootstrap";

//import .env variables
export const apiUrl = import.meta.env.VITE_API_URL;

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(pinia);
app.use(router)


app.mount('#app')
