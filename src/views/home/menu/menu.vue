<template>
  <div class="menu" @click.self="close">
    <div class="menu-content">
      <div class="user-info">
        <img
          class="icon user-avatar"
          :src="
            isLogin
              ? store.state.user.avatarUrl
              : require('@icon/home/user.png')
          "
          alt=""
        />
        <div class="name" @click="toLogin">
          {{ isLogin ? store.state.user.nickname : "立即登录" }}
          <img class="icon right" src="@icon/home/right.png" />
        </div>
        <img class="icon scan" src="@icon/home/scan.png" alt="" />
      </div>

      <card class="quick" title="音乐服务">
        <list-item icon="right" title="云村有票" />
      </card>
    </div>
  </div>
</template>

<script lang='ts'>
import { Options, Vue, setup } from "vue-class-component";
import Card from "@/components/card.vue";
import List from "@/components/list.vue";
import ListItem from "@/components/listItem.vue";
import { useStore } from "@/store";

@Options({
  components: {
    Card,
    List,
    ListItem,
  },
  emits: ["close"],
})
export default class Menu extends Vue {
  store = setup(() => {
    return useStore();
  });

  get isLogin() {
    return !!this.store.state.user;
  }

  toLogin() {
    if (this.isLogin) {
      return;
    }
    this.$router.push("/login");
  }

  close() {
    this.$emit("close");
  }
}
</script>
<style lang="scss" scoped>
.menu {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.6);

  z-index: 9;
  .menu-content {
    width: 70%;
    height: 100%;

    background: #efefef;

    padding: 0 15px;
    padding-top: 12.5px;

    .user-info {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      .user-avatar {
        width: 25px;
        height: 25px;

        border-radius: 12.5px;
      }
      .name {
        display: flex;
        align-items: center;

        margin-left: 10px;
        font-size: 14px;

        .right {
          width: 15px;
          height: 15px;
        }
      }
      .scan {
        width: 25px;
        height: 25px;
        margin-left: auto;
      }
    }

    .quick {
      margin-top: 15px;
    }
  }
}
</style>