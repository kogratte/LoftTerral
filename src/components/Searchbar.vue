<template>
  <v-form>
    <v-text-field
        v-model="research"
        :label="label"
        id="searchbar"
        required
        :fullWidth="true"
        placeholder="Where do I want to go?"
      ></v-text-field>
    </v-form>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
// Rolling delay in ms
const ROLLING_DELAY = 5000;

@Component({
  ...mapGetters('researchModule', {
    research: 'currentResearch',
  }),
})
export default class Searchbar extends Vue {
  /**
   * Counter for label rotation
   */
  private count = 0;

  /**
   * Cities for label roation
   */
  private readonly cities = ['London', 'New-York', 'Bali', 'Shanghai', 'Tokyo'];

  /**
   * Research
   */
  get research(): string {
    return this.$store.state.research.currentResearch;
  }

  set research(input: string) {
    this.$store.dispatch('research/SET_SEARCH', { input });
  }

  get label(): string {
    return `I want to go to... ${this.cities[this.count]}?`;
  }

  rotatePlaceholder(): void {
    if (this.count === this.cities.length - 1) {
      this.count = 0;
    } else {
      this.count += 1;
    }
    this.enablePlaceholderRotation();
  }

  enablePlaceholderRotation(): void {
    setTimeout(this.rotatePlaceholder, ROLLING_DELAY);
  }

  mounted(): void {
    this.enablePlaceholderRotation();
  }
}
</script>
<style lang="scss">
</style>
