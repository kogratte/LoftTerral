<template>
  <div id="app">
    <v-container class="fill-height align-center">
      <v-row class="content">
        <v-col>
          <router-view />
        </v-col>
      </v-row>
      <v-row fluid class="footer">
        <v-col>
          <div>&copy;LofTerral 2021</div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">
// eslint-disable-next-line import/no-extraneous-dependencies
import { Component, Vue } from 'vue-property-decorator';

@Component({

})
export default class App extends Vue {
  mounted(): void {
    this.$store.dispatch('geographic/INIT');
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  background-image: url('assets/bg.jpg');
  background-size: cover;
  padding: 1rem;
}

#app .content {
  height: calc(100% - .8rem);
  align-items: center;
}

#app .footer {
  height: .8rem;
  font-size: .6rem;
  color: white;
}
</style>
