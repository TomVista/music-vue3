<template>
  <div class="search">
    <search-header />
    <div class="body">
      <banner style="margin-left: 15px; margin-right: 15px" />
      <entrance style="margin-top: 15px" />
      <recommend-song style="margin-top: 15px" />
    </div>
  </div>
</template>

<script lang='ts'>
import { Options, Vue } from "vue-class-component";
import SearchHeader from "./header.vue";
import Banner from "./banner.vue";
import Entrance from "./entrance/entrance.vue";
import RecommendSong from "./recommendedSong/recommendedSong.vue";

@Options({
  name:"HomeSrarch",
  components: {
    SearchHeader,
    Banner,
    Entrance,
    RecommendSong,
  },
})
export default class Search extends Vue {
  created(){
    console.log('search created')
  }
}
</script>

<style lang='scss' scope>
.search {
  background-color: #eeeeee;
  .body {
    background-color: white;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    padding-bottom: 15px;
    padding-top: 15px;
  }
}
</style>