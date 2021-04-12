<template>
  <article
    class="episode-large"
    :style="`
      background-image: url('${data.cover}');
    `"
  >
    <router-link :to="data.href || ''">
      <div class="episode-large-ratio"></div>
      <div class="episode-large-content-wrapper">
        <div class="episode-large-content">
          <div class="content-core">
            <link-badge
              v-if="data.parent"
              class="do-offset icon-layout white-text"
              :to="data.parent.href"
            >
              <span>{{ data.parent.name }}</span>
              <chevron-right-icon size="16" />
            </link-badge>
            <h3 class="title">{{ data.title }}</h3>
            <h4 v-if="data.season" class="subtitle">
              Season {{ data.season }}, episode {{ data.episode }}
            </h4>
            <h4 v-else class="subtitle">
              {{ formatDate(data.date) }}
            </h4>
          </div>
          <div class="upcoming-side" v-if="dayCount > 0">
            <div class="upcoming-wrapper">
              <h3 class="upcoming-title">{{ dayCount }}</h3>
              <h4 class="upcoming-title-name">
                {{ dayCount === 1 ? "day" : "days" }}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </article>
</template>

<style lang="scss" scoped>
.episode-large {
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  position: relative;

  a {
    color: inherit;
  }

  --text: #e9ecef;
  --text-secondary: #ccd0d4;
  color: var(--text);
}
.episode-large-ratio {
  width: 100%;
  padding-bottom: 56.25%;
}

.episode-large-content-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
}
.episode-large-content {
  padding: 10px;
  width: 100%;
  background: linear-gradient(to top, black, transparent);
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  .title,
  .subtitle {
    margin: 0;
  }
  .title {
    margin: 3px 0;
  }
  .subtitle {
    color: var(--text-secondary);
    font-weight: 500;
    font-size: 0.9rem;
  }
}

.upcoming-wrapper {
  > * {
    margin: 0;
    text-align: center;
  }

  .upcoming-title-name {
    font-weight: 500;
    color: var(--text-secondary);
    font-size: 0.8rem;
  }
}
</style>

<script lang="ts">
// Import Vue
import { computed, defineComponent } from "vue";

// Import components
import LinkBadge from "./LinkBadge.vue";

// Import icons
import { ChevronRightIcon } from "@zhuowenli/vue-feather-icons";

// Config
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
function clean(d: Date) {
  return new Date(d.toISOString().split("T")[0]);
}

export default defineComponent({
  components: {
    LinkBadge,
    ChevronRightIcon,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const dayCount = computed(() => {
      const today = new Date();
      const airDate = new Date(props.data.date);

      const diff = clean(airDate).getTime() - clean(today).getTime();
      const dayDiff = Math.round(diff / (1e3 * 60 * 60 * 24));

      return dayDiff;
    });

    return {
      dayCount,
    };
  },
  methods: {
    formatDate(dateString: Date | string) {
      const d = new Date(dateString);
      const date = d.getDate().toString();
      const month = months[d.getMonth()].slice(0, 3);
      const year = d.getFullYear();
      return `${month} ${date} ${year}`;
    },
  },
});
</script>
