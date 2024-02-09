import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import './styles/main.css';
import './styles/new-year/main.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
