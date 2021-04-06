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
