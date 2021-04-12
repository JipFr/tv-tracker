<template>
  <div class="large-card-list">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.large-card-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-template-rows: auto;
  grid-auto-rows: 0;
  grid-gap: 0 20px;
  overflow: hidden;
}

@media (max-width: 700px) {
  .large-card-list {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    grid-gap: 0; // Grid-gap works with flex now????
    scroll-snap-type: x mandatory;

    > * {
      scroll-snap-align: start;
      min-width: 300px;
      margin-right: 10px;
    }
  }
}
</style>

<script lang="ts">
// Import Vue
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>
