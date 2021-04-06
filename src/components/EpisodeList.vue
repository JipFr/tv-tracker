<template>
  <div class="mw">
    <div class="episode-list">
      <episode v-for="i in new Array(10).fill(0).map((_, i) => i)" :key="i" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mw {
  width: 90%;
  max-width: 1300px;
  margin: 40px auto;
}
.episode-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 10px;
}
</style>

<script lang="ts">
// Import Vue stuff
import { defineComponent } from "vue";

// Import components
import Episode from "./util/Episode.vue";

export default defineComponent({
  components: {
    Episode,
  },
});
</script>