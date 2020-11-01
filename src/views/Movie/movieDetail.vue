<template>
  <div id="detail" class="slider-enter-active">
    <Header title="影片详情">
      <i class="iconfont icon-right" @touchstart="handleToBack"></i>
    </Header>
    <Loading v-if="isloading" />
    <div class="content" v-else>
      <div class="detail_list">
        <div
          class="detail_bg"
          :style="{'background-image':`url(${movieData.img.replace(/w\.h/,'140.128')})`}"
        ></div>
        <div class="detail_list_filter"></div>
        <div class="detail_list_content">
          <div class="detail_list_img">
            <img :src="movieData.img|setWH('120.168')" alt />
          </div>
          <div class="detail_list_info">
            <h2>{{movieData.nm}}</h2>
            <p>{{moveId.enm}}</p>
            <p>{{movieData.sc}}</p>
            <p>{{movieData.cat}}</p>
            <p>{{movieData.src}} / {{movieData.dur}}分钟</p>
            <p>{{movieData.pubDesc}}</p>
          </div>
        </div>
      </div>
      <div class="detail_intro">
        <p>{{movieData.dra}}</p>
      </div>
      <div class="detail_player swiper-container" ref="detail_player">
        <ul class="swiper-wrapper">
          <li class="swiper-slide" v-for="(item,index) in movieData.photos" :key="index">
            <div>
              <img :src="item | setWH('140.128')" alt />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header";
export default {
  name: "movieDetail",
  data() {
    return {
      movieData: [],
      active: "",
      isloading: true
    };
  },
  filters: {
    active(value) {
      this.movieData.img;
    }
  },
  props: ["moveId"],
  components: {
    Header
  },
  mounted() {
    this.getDetailData();
  },
  methods: {
    handleToBack() {
      //编程式路由
      this.$router.back();
    },
    async getDetailData() {
      const moveId = this.moveId;
      //第二种方法通过$route.params来获取动态id
      // const moveId=this.$route.params.moveId
      // this.$service.get("/ajax/detailmovie?movieId=" + moveId).then(res => {
      let res = await this.$api.getDetail(moveId);
      if (res) {
        this.movieData = res.detailMovie;
        this.isloading = false;
        console.log(this.movieData);
        this.$nextTick(() => {
          new Swiper(this.$refs.detail_player, {
            slidesPerView: "auto",
            freeMode: true,
            freeModeSticky: true
          });
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
#detail.slider-enter-active {
  animation: 0.3s linear slideMove;
  @keyframes slideMove {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0%);
    }
  }
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  width: 100%;
  min-height: 100%;
  background-color: #fff;
  .content {
    .detail_list {
      width: 100%;
      height: 200px;
      position: relative;
      overflow: hidden;
      .detail_bg {
        width: 100%;
        height: 100%;
        background: 0 40%;
        filter: blur(20px);
      }
      .detail_list_filter {
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: #40454d;
        opacity: 0.3;
      }
      .detail_list_content {
        display: flex;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 20;
        .detail_list_img {
          width: 108px;
          height: 150px;
          border: 1px solid #f0f2f3;
          margin: 20px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .detail_list_info {
          margin-top: 20px;
          h2 {
            font-size: 20px;
            color: #fff;
            font-weight: 400;
            line-height: 40px;
          }
          p {
            color: #fff;
            opacity: 0.7;
            line-height: 22px;
            font-size: 14px;
          }
        }
      }
    }
    .detail_intro {
      margin: 5px 0;
      p {
        text-indent: 10px;
        line-height: 1.2em;
      }
    }
    .swiper-container {
      .swiper-wrapper {
        .swiper-slide {
          width: 70px;
          height: 100px;
          margin-right: 20px;
          div {
            width: 100%;
            height: 100%;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
}
</style>