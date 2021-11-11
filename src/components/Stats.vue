<template>
  <v-container fluid>
    <v-row>
      <v-col class="stat">
        <div class="value">{{this.continentsCount}}</div>
        <div class="label">Continents</div>
      </v-col>
      <v-col class="stat">
        <div class="value">{{this.citiesCount}}</div>
        <div class="label">Cities</div>
      </v-col>
      <v-col class="stat">
        <div class="value">{{this.languagesCount}}</div>
       <div class="label">Languages</div>
      </v-col>
      <v-col class="stat">
        <div class="value">{{this.currenciesCount}}</div>
        <div class="label">Currencies</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

@Component({
  computed: {
    ...mapGetters('geographic', [
      'languagesCount',
      'continentsCount',
      'citiesCount',
      'currenciesCount',
    ]),
  },
})
export default class Stats extends Vue {
  languagesCount?: number;

  citiesCount?: number;

  continentsCount?: number;

  currenciesCount?: number;
}
</script>
<style lang="scss" scoped>
.stat {
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
  transition: font-size 0.2s ease-in;

  &:hover {
    font-size: 1.3rem;
  }
  .value {
    font-size: 1.5rem;
margin-right: 5px;
  }
}
</style>
