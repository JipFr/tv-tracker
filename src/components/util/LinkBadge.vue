<template>
  <router-link :to="to" class="link-badge">
    <slot />
  </router-link>
</template>

<style lang="scss" scoped>
.link-badge {
  font-size: 0.9rem;
  font-weight: 500;
  border-radius: 4px;
  padding: 0 5px;
  background: var(--overlay-color);
  text-decoration: none;
  color: var(--text-secondary);

  &.icon-layout {
    display: inline-grid;
    align-items: center;
    grid-template-columns: 1fr auto;
    grid-gap: 4px;
  }
  &.white-text {
    background: rgba(0, 0, 0, 0.1);
    color: white;

    &[to]:hover {
      background: rgba(0, 0, 0, 0.2);
    }
  }

  &[to] {
    cursor: pointer;
  }
  &[to]:hover {
    background: var(--overlay-color-hover);
  }
  &[to]:active {
    background: var(--overlay-color-active);
  }

  &.do-offset {
    margin-left: -4px;
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    to: {
      type: String,
      required: true,
    },
  },
});
</script>
