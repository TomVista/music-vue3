<template>
  <div class="main">
    <router-view class="page-content" />
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "~@styles/base.scss";

html,
body {
  width: 100%;
  height: 100%;

  margin: 0 0;
}

.app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.main {
  width: 100%;
  height: 100%;

  overflow: hidden;

  .page-content {
    width: 100%;
    height: 100%;

    overflow: hidden;

    position: relative;
  }
}
</style>
