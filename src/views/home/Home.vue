<template>
  <div class="home">
    <img class="icon menu" src="@icon/home/menu.png" alt="">
    <router-view class="content" />
    <tabbar class="tabbar" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Tabbar from './tabbar/tabbar.vue';

@Options({
  components: {
    Tabbar
  },
})
export default class Home extends Vue {}
</script>
<style lang="scss" scoped>
  .home{
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    position: relative;

    .menu{
      position: absolute;
      left: 15px;
      top: 12.5px;
    }

    .content{
      flex-grow: 1;
      flex-shrink: 0;
    }

    .tabbar{
      flex-shrink: 0;
      flex-grow: 0;
    }
  }
</style>
