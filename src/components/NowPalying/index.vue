<template>
  <div class="movie_body">
    <Loading v-if='isloading' />
    <Scroller v-else :handleToScroll='handleToScroll'  :handleToTouchEnd='handleToTouchEnd'>
          <ul>
            <li class="msg">{{pulldownMsg}}</li>
            <li v-for="(item,index) in movieList" :key="index">
              <div class="pic_show" @tap='handleToDetail(item.id)'>
                <img :src="item.img|setWH('128.180')" />
              </div>
              <div class="info_list">
                <h2 @tap='handleToDetail(item.id)'>
                  {{item.nm}}
                  <img src="@/assets/maxs.png" alt v-if="item.version" />
                </h2>
                <p>
                  观众评
                  <span class="grade">{{item.sc}}</span>
                </p>
                <p>主演: {{item.star}}</p>
                <p>{{item.showInfo}}</p>
              </div>
              <div class="btn_mall">购票</div>
            </li>
          </ul>
    </Scroller>
  </div>
</template>
<script>
// import BScroll from "better-scroll";
export default {
  name: "NowPlaying",
  data() {
    return {
      movieList: [],
      pulldownMsg: "",
      isloading:true,
      beforeId:-1
    };
  },
  //mounted 生命周期如果有keep-alive缓冲，就不会触发了，解决办法用activated，只有当有keepalive出现的时候才能用这个声明周期
  activated() {
    // console.log(123)
    let cityId=this.$store.state.city.id
    if(cityId===this.beforeId) return 
    this.isloading=true
    console.log(123)
    this.$service.get("/ajax/movieOnInfoList?cityId="+cityId).then(res => {
      this.movieList = res.data.movieList;
      this.isloading=false
      this.beforeId=cityId
      //等待数据渲染完毕以后再执行scorll
      // this.$nextTick(() => {
      //   let scroll = new BScroll(this.$refs.movie_body, {
      //     tap: true,
      //     probeType: 1
      //   });
      //   scroll.on("scroll", pos => {
      //     
      //   });
      //   scroll.on("touchEnd", pos => {
      //     if (pos.y > 30) {
      //       this.$service.get("/ajax/movieOnInfoList?cityId=10").then(res => {
      //         this.pulldownMsg = "更新成功";
      //         setTimeout(() => {
      //           this.movieList = res.data.movieList;
      //            this.pulldownMsg =''
      //         }, 1000);
      //       });
      //     }
      //   });
      // });
    });
  },
  methods: {
    handleToScroll(pos) {
      if (pos.y > 30) {
            this.pulldownMsg = "正在更新中";
          }
    },
    handleToTouchEnd(pos){
       if (pos.y > 30) {
        this.$service.get("/ajax/movieOnInfoList?cityId=10").then(res =>{ 
              this.pulldownMsg = "更新成功";
              setTimeout(() => {
                this.movieList = res.data.movieList;
                 this.pulldownMsg =''
              }, 1000);
            });
          }
    },
    handleToDetail(moveId){
      //编程式路由导航
      this.$router.push('/movie/detail/1/'+moveId)
    }
  }
};
</script>
<style lang="scss" scoped>
#content .movie_body {
  position: absolute;
  top: 95px;
  left: 0;
  right: 0;
  bottom: 45px;
  overflow: auto;
  ul {
    margin: 0 12px;
    overflow: hidden;
    .msg{
      margin:0;
      padding:0;
      border:none;
    }
    li {
      margin-top: 12px;
      display: flex;
      align-items: center;
      border-bottom: 1px #e6e6e6 solid;
      padding-bottom: 10px;
      .pic_show {
        width: 64px;
        height: 90px;
        img {
          width: 100%;
        }
      }
      .info_list {
        margin-left: 10px;
        flex: 1;
        position: relative;
        h2 {
          font-size: 17px;
          line-height: 24px;
          width: 150px;
          overflow: hidden;
          font-weight: 700;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        p {
          font-size: 13px;
          color: #666;
          line-height: 22px;
          width: 200px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .grade {
          font-weight: 700;
          color: #faaf00;
          font-size: 15px;
        }
        img {
          width: 50px;
          position: absolute;
          right: 10px;
          top: 5px;
        }
      }
    }
  }
  .btn_mall {
    width: 47px;
    height: 27px;
    line-height: 28px;
    text-align: center;
    background-color: #f03d37;
    color: #fff;
    border-radius: 4px;
    font-size: 12px;
    cursor: pointer;
  }
  // .btn_pre{ background-color: #3c9fe6;};
}
</style>