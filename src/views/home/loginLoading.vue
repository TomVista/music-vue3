<template>
  <div class="login-loading">
    <img src="@icon/logo.png" alt="" />
    <div class="title">{{ title }}</div>
  </div>
</template>

<script lang='ts'>
import { Options, Vue, prop } from "vue-class-component";
class Props {
  title = prop<string>({ default: "加载中..." });
}
@Options({})
export default class Base extends Vue.with(Props) {
   
}
</script>
<style lang="scss" scoped>
.login-loading{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: red;

    .title{
        color: white;
    }
}
</style>