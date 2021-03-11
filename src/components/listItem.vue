<template>
  <div class="list-item">
    <img v-if="icon" class="left icon" :src="require(`@icon/home/${icon}.png`)" alt="" />
    <div class="center">{{ title }}</div>
    <img class="right icon" src="@icon/home/right.png" alt="" />
  </div>
</template>

<script lang='ts'>
import { Options, Vue, prop } from "vue-class-component";

class Props {
  icon = prop<string>({ default: null });
  title = prop<string>({ default: "title" });
}

@Options({})
export default class ListItem extends Vue.with(Props) {}
</script>
<style lang="scss" scoped>
.list-item {
  width: 100%;
  height: 45px;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;

  .left {
    height: 45px;
    width: 45px;
    flex-grow: 0;
    flex-shrink: 0;

    &.icon {
      height: 25px;
      width: 25px;
    }
  }
  .center {
    flex-grow: 1;
  }
  .right {
    height: 45px;
    width: 45px;
    flex-grow: 0;
    flex-shrink: 0;

    &.icon {
      height: 20px;
      width: 20px;
    }
  }
}
</style>