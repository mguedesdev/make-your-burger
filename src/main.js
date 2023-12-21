import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';

const app = createApp(App);

const userData = JSON.parse(localStorage.getItem('user'));
if (userData && userData.uid) {
  store.commit('SET_USER', userData);
}

app.use(router);
app.use(store);
app.mount('#app');

