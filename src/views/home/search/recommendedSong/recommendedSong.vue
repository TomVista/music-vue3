<template>
  <div class="song">
    <div class="song-header">
      <div class="title">推荐歌单</div>
      <div class="more">更多&gt;</div>
    </div>
    <div class="song-list">
      <recommend-song-item
        v-for="item in recommendSongs"
        :my-song="item"
        :key="item.id"
      />
    </div>
  </div>
</template>

<script lang='ts'>
import { Options, Vue } from "vue-class-component";
import axios from "axios";
import RecommendSongItem from "./recommendSongItem.vue";
import { RecommendSongData } from "./type";

@Options({
  components: {
    RecommendSongItem,
  },
})
export default class RecommendSong extends Vue {
  recommendSongs: Array<RecommendSongData> = [];

  created() {
    axios.get("/personalized?limit=6").then((res) => {
      this.recommendSongs = res.data.result;
    });
  }
}
</script>
<style lang="scss" scoped>
.song {
  border-top: 1px solid #eeeeee;
  padding-top: 10px;
  .song-header {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

    justify-content: space-between;
    align-items: center;

    padding: 0 15px;

    .title {
      font-weight: bolder;
    }

    .more {
      width: 50px;
      height: 20px;

      border-radius: 15px;
      border: 1px solid black;

      font-size: 14px;
      line-height: 20px;
      text-align: center;
    }
  }
  .song-list {
    width: 100%;
    box-sizing: border-box;

    margin-top: 10px;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

    overflow: auto;

    &::-webkit-scrollbar {
      display: none;
    }

    padding-left: 15px;
    padding-right: 15px;
  }
}
</style>