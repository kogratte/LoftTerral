import Vue from 'vue';
import Vuex from 'vuex';
import * as researchModule from './modules/research';
import * as geographicModule from './modules/geographic';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    research: researchModule,
    geographic: geographicModule,
  },
});
