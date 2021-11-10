<template>
  <v-container fill-height fluid>
    <v-row class="search-bar" :class="{ 'research': hasPendingResearch }">
      <v-col>
        <searchbar />
      </v-col>
    </v-row>

    <v-row fill-height class="results-area" :class="{ 'hidden': !hasPendingResearch }">
      <v-col>
        <results />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import Searchbar from '@/components/Searchbar.vue';
import Results from '@/components/Results.vue';

@Component({
  computed: {
    ...mapGetters('research', [
      'hasPendingResearch',
    ]),
  },
  components: { Searchbar, Results },
})
export default class Home extends Vue {
  hasPendingResearch!: boolean;
}
</script>
<style lang="scss" scoped>
.search-bar {
  position: absolute;
  width: 100%;
  top: 50vh;
  transition: top 0.3s ease-in;

  &.research {
    top: 0;
  }
}
.results-area {
  transition: visibility 0.2s ease-in 0.3s;
  visibility: visible;

  &.hidden {
    visibility: hidden;
    transition: visibility 0 ease 0.3s;
  }
}
</style>
