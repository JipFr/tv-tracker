<template>
  <div class="container">
    <large-list>
      <media-large v-for="data in list" :key="data.title" :data="data.data" />
    </large-list>
    <episode-list class="container-nested" />
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 95%;
  margin: 40px auto;
  max-width: 1300px;
}
.container-nested {
  width: 95%;
  max-width: 800px;
  margin: 40px auto;
}

@media (max-width: 700px) {
  .large-card-list {
    margin-left: -2.5vw;
    margin-right: -2.5vw;

    > *:first-child {
      margin-left: 2.5vw;
    }
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import EpisodeList from "../components/EpisodeList.vue";
import LargeList from "../components/util/LargeList.vue";
import MediaLarge from "../components/util/MediaLarge.vue";

const data = [
  {
    data: {
      title: "B.S.O.D",
      season: 5,
      episode: 1,
      cover:
        "https://m.media-amazon.com/images/M/MV5BMTA0ODQ1NDktYTNjMi00YWVlLTlkOTItMTI4NzVhNzhiYmQyXkEyXkFqcGdeQXVyMjg2MTMyNTM@._V1_UX1280_CR0,0,1280,720_AL_.jpg",
      parent: {
        name: "Person of Interest",
        href: "/tt1839578",
      },
      date: new Date("22 feb 2017"),
    },
  },
  {
    data: {
      title: "Fear Me",
      season: 7,
      episode: 5,
      cover:
        "https://m.media-amazon.com/images/M/MV5BYjA1Y2Y5YTYtNjQyZi00MTUwLWFjNTUtOTU4YjA3MzE5N2Y1XkEyXkFqcGdeQXVyNzE3ODQxNjU@._V1_UX1280_CR0,0,1280,720_AL_.jpg",
      parent: {
        name: "The Flash",
        href: "/tt1839578",
      },
      date: new Date("30 mar 2021"),
    },
  },
  {
    data: {
      title: "Triage",
      season: 2,
      episode: 9,
      cover:
        "https://m.media-amazon.com/images/M/MV5BOTA0OTgxNmYtMDY2NC00NTZmLTk1MDQtMWM1ZDgzYzIwMDA1XkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_FMjpg_UX1280_.jpg",
      parent: {
        name: "For All Mankind",
        href: "/tt1839578",
      },
      date: new Date("16 apr 2021"),
    },
  },
  {
    data: {
      title: "Avengers: Endgame",
      cover:
        "https://m.media-amazon.com/images/M/MV5BMTkxNTQzNTg4Nl5BMl5BanBnXkFtZTgwMzYzNDQ2NzM@._V1_.jpg",
      href: "/tt1839578",
      date: new Date("24 apr 2019"),
    },
  },
];

export default defineComponent({
  name: "Home",
  components: {
    EpisodeList,
    LargeList,
    MediaLarge,
  },
  setup() {
    return {
      list: data,
    };
  },
});
</script>
