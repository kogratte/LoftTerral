<template>
  <v-container class="fill-height flex-column" fluid>
    <v-row fluid>
      <v-col>
        <searchbar class="searchbar" />
      </v-col>
    </v-row>
    <v-row fluid dense>
      <v-col>
        <stats />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Searchbar from '@/components/Searchbar.vue';
import Results from '@/components/Results.vue';
import Stats from '@/components/Stats.vue';

@Component({
  components: { Searchbar, Results, Stats },
})
export default class Home extends Vue {
}
</script>
<style lang="scss" scoped>

</style>
