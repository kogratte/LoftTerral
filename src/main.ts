import Vue from 'vue';
import { provide } from '@vue/composition-api';
import { DefaultApolloClient } from '@vue/apollo-composable';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import apolloClient from './apollo-client';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  setup(): void {
    provide(DefaultApolloClient, apolloClient);
  },
  render: (h) => h(App),
}).$mount('#app');
