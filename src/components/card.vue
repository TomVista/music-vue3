<template>
  <div class="card">
    <div class="title">{{ title }}</div>
    <slot />
  </div>
</template>

<script lang='ts'>
import { Options, Vue, prop } from "vue-class-component";

class Props {
  title = prop<string>({ default: null });
}

@Options({})
export default class Card extends Vue.with(Props) {}
</script>
<style lang="scss" scoped>
.card {
  background-color: white;

  border-radius: 8px;

  padding-left: 10px;
  padding-right: 10px;

  padding-bottom: 10px;

  .title {
    height: 30px;
    line-height: 30px;

    font-size: 12px;

    color: gray;
    border-bottom: 1px solid #efefef;
  }
}
</style>