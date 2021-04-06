<template>
  <card>
    <div class="card-sect">
      <div class="episode-layout">
        <div class="episode-core">
          <h3>
            <link-badge class="do-offset" to="/">
              <span>Person of Interest</span>
              <chevron-right-icon size="16" />
            </link-badge>
            <span class="bold main-title">Sotto Voce</span>
            <span class="sub">Season 5, episode 8</span>
          </h3>
        </div>
        <div class="poster">
          <div
            class="poster-image"
            :style="`background-image: url(${image});`"
          ></div>
        </div>
      </div>
    </div>
  </card>
</template>

<style lang="scss" scoped>
.episode-layout {
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 10px;
}
.poster-image {
  background-size: cover;
  background-position: center;
  width: 60px;
  padding-top: 100%;
  border: 1px solid var(--border);
  background-clip: padding-box;
  border-radius: 4px;
}
.episode-core {
  display: flex;
  align-items: center;

  h3 > * {
    display: block;

    & + * {
      margin-top: 3px;
    }
  }
  .sub {
    font-size: 0.9rem;
  }
  .link-badge {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr auto;
    grid-gap: 4px;
  }
  .main-title {
    margin-top: 5px;
  }
}
</style>

<script lang="ts">
// Import VUe
import { defineComponent } from "vue";

// Import components
import Card from "./Card.vue";
import LinkBadge from "./LinkBadge.vue";

// Import icons
import { ChevronRightIcon } from "@zhuowenli/vue-feather-icons";

export default defineComponent({
  components: {
    Card,
    LinkBadge,
    ChevronRightIcon,
  },
  setup() {
    return {
      image:
        "https://m.media-amazon.com/images/M/MV5BM2YzMjQzMTItNjY5NS00NzVjLTk4YjQtYTE3MDE3OGU4NzMzXkEyXkFqcGdeQXVyMTk4OTI5NzU@._V1_UY126_UX224_AL_.jpg",
    };
  },
});
</script>