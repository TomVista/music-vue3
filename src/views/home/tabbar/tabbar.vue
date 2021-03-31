<template>
  <div class="tabbar">
    <tabbar-item
      @click="select(item)"
      v-for="item in setting"
      :model="item"
      :active="item.name === currentPage"
      :key="item.path"
    ></tabbar-item>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TabbarItem from "./tabbarItem.vue";
import { Page } from "./type";
@Options({
  components: { TabbarItem },
})
export default class Tabbar extends Vue {
  setting: Array<Page> = [
    {
      name: "发现",
      icon: require("@/assets/icon/tabbar/home.png"),
      activeIcon: require("@/assets/icon/tabbar/home-fill.png"),
      path: "/",
    },
    {
      name: "播客",
      icon: require("@/assets/icon/tabbar/video.png"),
      activeIcon: require("@/assets/icon/tabbar/video-fill.png"),
      path: "/video",
    },
    {
      name: "我的",
      icon: require("@/assets/icon/tabbar/search.png"),
      activeIcon: require("@/assets/icon/tabbar/search.png"),
      path: "/user",
    },
    {
      name: "K歌",
      icon: require("@/assets/icon/tabbar/message.png"),
      activeIcon: require("@/assets/icon/tabbar/message-fill.png"),
      path: "/message",
    },
    {
      name: "云村",
      icon: require("@/assets/icon/tabbar/user.png"),
      activeIcon: require("@/assets/icon/tabbar/user-fill.png"),
      path: "/user",
    },
  ];

  currentPage = this.setting[0].name;

  select(page: Page) {
    this.currentPage = page.name;
    this.$router.push(page.path);
  }
}
</script>
<style scoped lang="scss">
.tabbar {
  height: 50px;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  justify-content: space-around;
  align-items: center;
}
</style>