<template>
  <div class="entrance-item">
    <img class="img" :src="entrance.iconUrl" alt="entrance icon" />
    <div class="name">{{ entrance.name }}</div>
  </div>
</template>

<script lang='ts'>
import { Options, Vue } from "vue-class-component";
import { EntranceData } from "./type";

class Props {
  entrance: EntranceData = {
    id: 0,
    name: "default",
    iconUrl: "",
    url: "",
    homepageMode: "",
    skinSupport: false,
  };
}

@Options({})
export default class EntranceItem extends Vue.with(Props) {}
</script>
<style lang="scss" scoped>
.entrance-item {
  width: 60px;

  ~ .entrance-item {
    margin-left: 15px;
  }

  .img {
    width: 60px;
    height: 60px;

    border-radius: 30px;
    background-color: wheat;

    margin: auto auto;
  }

  .name {
    font-size: 12px;
    text-align: center;
  }
}
</style>