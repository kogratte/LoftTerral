<template>
  <div class="results">
    <v-container>
    <v-card class="mx-auto"
    max-width="400" v-for="country in countries" :key="country.code" elevation="2">
      <v-card-title>{{ country.name }}</v-card-title>
      <v-card-text></v-card-text>
      <v-card-actions>
        <div>
          Do something here...
        </div>
      </v-card-actions>
    </v-card>
    </v-container>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters, mapState } from 'vuex';

@Component({
  computed: {
    ...mapGetters('research', [
      'hasPendingResearch',
    ]),
    ...mapState('research', [
      'currentResearch',
    ]),
  },
})
export default class Result extends Vue {
}
</script>
<style lang="scss" scoped>

</style>
