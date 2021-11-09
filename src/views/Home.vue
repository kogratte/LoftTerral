<template>
  <searchbar />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Searchbar from '@/components/Searchbar.vue';

@Component({
  components: {
    Searchbar,
  },
})
export default class Home extends Vue {}
</script>
