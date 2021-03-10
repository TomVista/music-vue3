<template>
  <div class="banner">
    <img class="banner-img" :src="banners[0]?.pic" alt="" />
  </div>
</template>

<script lang='ts'>
import { Vue, Options } from "vue-class-component";
import axios from "axios";

@Options({})
export default class Banner extends Vue {
  banners: Array<BannerData> = [
    {
      pic:
        "http://p1.music.126.net/zZqJd1rK-4lQXaMv_CRDDQ==/109951165791666481.jpg",
      targetId: 0,
      adid: null,
      targetType: 3000,
      titleColor: "blue",
      typeTitle: "独家",
      url: "https://music.163.com/store/newalbum/detail?id=80915351",
      adurlV2: null,
      exclusive: false,
      monitorImpress: null,
      monitorClick: null,
      monitorType: null,
      monitorImpressList: [],
      monitorClickList: [],
      monitorBlackList: null,
      extMonitor: null,
      extMonitorInfo: null,
      adSource: null,
      adLocation: null,
      encodeId: "0",
      program: null,
      event: null,
      video: null,
      dynamicVideoData: null,
      song: null,
      bannerId: "1615346279291812",
      alg: null,
      scm:
        "1.music-homepage.homepage_banner_force.banner.2765997.1997556096.null",
      requestId: "",
      showAdTag: true,
      pid: null,
      showContext: null,
      adDispatchJson: null,
    },
  ];

  created() {
    axios.get("/banner?type=2").then((res) => {
      this.banners = res.data.banners;
    });
  }
}

interface BannerData {
  pic: "http://p1.music.126.net/zZqJd1rK-4lQXaMv_CRDDQ==/109951165791666481.jpg";
  targetId: 0;
  adid: null;
  targetType: 3000;
  titleColor: "blue";
  typeTitle: "独家";
  url: "https://music.163.com/store/newalbum/detail?id=80915351";
  adurlV2: null;
  exclusive: false;
  monitorImpress: null;
  monitorClick: null;
  monitorType: null;
  monitorImpressList: [];
  monitorClickList: [];
  monitorBlackList: null;
  extMonitor: null;
  extMonitorInfo: null;
  adSource: null;
  adLocation: null;
  encodeId: "0";
  program: null;
  event: null;
  video: null;
  dynamicVideoData: null;
  song: null;
  bannerId: "1615346279291812";
  alg: null;
  scm: "1.music-homepage.homepage_banner_force.banner.2765997.1997556096.null";
  requestId: "";
  showAdTag: true;
  pid: null;
  showContext: null;
  adDispatchJson: null;
}
</script>

<style lang='scss'>
.banner {
  .banner-img {
    width: 100%;

    border-radius: 10px;
  }
}
</style>