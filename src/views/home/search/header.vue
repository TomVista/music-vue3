<template>
  <base-home-header class="header">
    <template v-slot:center>
      <div class="search-content">
        <img class="icon-search" src="@icon/tabbar/search.png" alt="search" />
        <div class="default-search">大家都在搜</div>
      </div>
    </template>
    <template v-slot:right>
      <img src="@icon/home/microphone.png" alt="microphone" class="icon" />
    </template>
  </base-home-header>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import BaseHomeHeader from "@/components/homeHeader.vue";

@Options({
  components: {
    BaseHomeHeader,
  },
})
export default class SearchHeader extends Vue {}
</script>

<style lang='scss'>
.header {
  background-color: #eeeeee;

  // 重写了home-base-header center
  .center {
    justify-self: stretch !important;
  }

  .search-content {
    width: 100%;
    height: 40px;

    border-radius: 20px;
    padding: 0 10px;

    background-color: white;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;

    .icon-search {
      height: 20px;
      width: 20px;

      flex-shrink: 0;
    }
    .default-search {
      flex-grow: 1;

      // 文字居中
      line-height: 40px;
    }
  }
}
</style>