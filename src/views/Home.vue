<template>
  <div>
    <episode-list />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EpisodeList from "../components/EpisodeList.vue";

export default defineComponent({
  name: "Home",
  components: {
    EpisodeList,
  },
});
</script>
