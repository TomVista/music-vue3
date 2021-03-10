<template>
  <div class="song-item">
    <div class="img-content">
      <div class="bg-shadow"></div>
      <div class="play-count">
        <img class="play-icon" src="@icon/home/play.png" alt="play count" />
        {{ playCount }}
      </div>
      <img class="img" :src="mySong.picUrl" alt="image of song" />
    </div>
    <div class="info">{{ mySong.name }}</div>
  </div>
</template>

<script lang='ts'>
import { Options, Vue, prop } from "vue-class-component";
import { RecommendSongData } from "./type";

class Props {
  mySong = prop<RecommendSongData>({ default: null });
}

@Options({})
export default class RecommendSongItem extends Vue.with(Props) {
  get playCount() {
    return `${(this.mySong.playCount / 10000).toFixed(0)}万`;
  }
}
</script>
<style lang="scss" scoped>
.song-item {
  position: relative;

  width: 80px;

  & ~ .song-item {
    margin-left: 15px;
  }

  .bg-shadow {
    z-index: -1;

    position: absolute;
    top: -6px;
    left: 50%;
    transform: translateX(-50%);

    width: 60px;
    height: 60px;

    border-radius: 6px;

    background-color: #eeeeee;
  }
  .play-count {
    height: 16px;

    position: absolute;
    top:5px;
    right: 5px;

    line-height: 16px;
    font-size: 12px;
    color: white;

    display: flex;

    align-items: center;

    .play-icon {
      height: 12px;
      width: 12px;
    }
  }
  .img-content {
    .img {
      width: 80px;
      height: 80px;

      border-radius: 8px;
    }
  }
  .info {
    font-size: 12px;

    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>