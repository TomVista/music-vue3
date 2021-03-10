<template>
  <div class="entrance">
    <entrance-item v-for="item in entrances" :entrance="item" :key="item.name">
    </entrance-item>
  </div>
</template>

<script lang='ts'>
import axios from "axios";
import { Options, Vue } from "vue-class-component";
import { EntranceData } from "./type";
import EntranceItem from "./entranceItem.vue";

@Options({
  components: {
    EntranceItem,
  },
})
export default class SearchEntrance extends Vue {
  entrances: Array<EntranceData> = [];

  created() {
    axios.get("/homepage/dragon/ball").then((res) => {
      this.entrances = res.data.data;
    });
  }
}
</script>
<style lang="scss" scoped>
.entrance {
  box-sizing: border-box;

  width: 100%;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  overflow: auto;

  padding: 0 15px;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>