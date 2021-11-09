<template>
  <div>
    <input id="searchbar" :placeholder="placeholder">
    {{ count }}
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Searchbar extends Vue {
  private count = 0;

  private readonly cities = [
    'London',
    'New-York',
    'Bali',
    'Shanghai',
    'Tokyo',
  ];

  get placeholder(): string {
    return `I want to go to... ${this.cities[this.count]}`;
  }

  rotatePlaceholder(): void {
    if (this.count === (this.cities.length - 1)) {
      this.count = 0;
    } else {
      this.count += 1;
    }
    this.enablePlaceholderRotation();
  }

  enablePlaceholderRotation(): void {
    setTimeout(this.rotatePlaceholder, 2500);
  }

  mounted(): void {
    this.enablePlaceholderRotation();
  }
}
</script>
