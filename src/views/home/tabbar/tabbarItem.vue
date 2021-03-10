<template>
  <div class="tabbar-itme">
    <img class="icon" :src="active ? model.activeIcon : model.icon" />
    <a class="name">{{ model.name }}</a>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Page } from "./type";

class Props {
  active: boolean = false;
  model: Page = {
    name: "name",
    path: "/",
    icon: "default",
    activeIcon: "default",
  };
}

@Options({})
export default class TabbarItem extends Vue.with(Props) {
}
</script>

<style lang="scss" scoped>
.tabbar-itme {
  display: flex;
  flex-direction: column;
  justify-items: center;

  .name {
    text-align: center;
  }
}
</style>>
