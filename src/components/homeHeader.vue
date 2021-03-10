<template>
  <div class="home-header">
    <div class="left">
      <slot name="left"> </slot>
    </div>

    <div class="center">
      <slot name="center"> </slot>
    </div>

    <div class="right">
      <slot name="right"> </slot>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class HomeHeader extends Vue {
  setup() {}
}
</script>
<style lang="scss" scoped>
.home-header {
  box-sizing: border-box;

  display: grid;
  grid-template-columns: 20% 60% 20%;
  grid-template-rows: 60px;
  align-items: center;

  padding: 0 15px;

  .left {
    justify-self: start;
  }

  .center {
    justify-self: center;
  }

  .right {
    justify-self: end;
  }
}
</style>
