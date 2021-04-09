<template>
  <div class="home">
    <img
      class="icon icon-menu"
      src="@icon/home/menu.png"
      alt=""
      @click="openMenu"
    />
    <home-menu v-show="showMenu" @close="closeMenu" />
    <router-view class="content" />
    <tabbar class="tabbar" />
    <login-loading v-show="showLoginLoading" :title="loadingTitle" />
  </div>
</template>

<script lang="ts">
import { Options, Vue, setup } from "vue-class-component";
import Tabbar from "./tabbar/tabbar.vue";
import HomeMenu from "./menu/menu.vue";
import LoginLoading from "./loginLoading.vue";
import axios from "axios";
import { useStore } from "@/store";

@Options({
  components: {
    Tabbar,
    HomeMenu,
    LoginLoading,
  },
})
export default class Home extends Vue {
  showMenu = false;
  showLoginLoading = true;
  loadingTitle = "加载中...";

  store = setup(() => useStore());

  async mounted() {
    const user = localStorage.getItem("user");

    if (user) {
      this.loadingTitle = "检查用户...";
      axios
        .get(`/user/detail?uid=${JSON.parse(user).userId}`)
        .then((res) => {
          this.loadingTitle = "更新用户信息...";
          this.store.mutations.setUser(res.data.profile);
          setTimeout(this.closeLoading, 1500);
        })
        .catch((error) => {
          this.cleanLogin();
          setTimeout(this.closeLoading, 1500);
        });
    } else {
      setTimeout(this.closeLoading, 1500);
    }
  }

  closeLoading() {
    this.showLoginLoading = false;
  }

  closeMenu() {
    this.showMenu = false;
  }

  openMenu() {
    this.showMenu = true;
  }

  cleanLogin() {
    document.cookie = "";
    this.store.mutations.setUser(null);
    localStorage.setItem("user", "");
  }
}
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  position: relative;

  .icon-menu {
    position: absolute;
    left: 15px;
    top: 12.5px;
  }

  .content {
    flex-grow: 1;
    flex-shrink: 0;
  }

  .tabbar {
    flex-shrink: 0;
    flex-grow: 0;
  }
}
</style>
