<template>
  <div class="search_body">
    <div class="search_input">
      <div class="search_input_wrapper">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" v-model="message" />
      </div>
    </div>
    <div class="search_result">
      <h3>电影/电视剧/综艺</h3>
      <ul>
        <li v-for="item in moviesList" :key="item.id">
          <div class="img">
            <img :src="item.img|setWH('120.168')" alt />
          </div>
          <div class="info">
            <p>
              <span>{{item.nm}}</span>
              <span>{{item.sc}}</span>
            </p>
            <p>{{item.enm}}</p>
            <p>{{item.cat}}</p>
            <p>{{item.rt}}</p>
          </div>
        </li>
        <!-- <li>
            <div class="img"><img src="/images/movie_2.jpg" alt=""></div>
            <div class="info">
              <p><span>无名之辈</span><span>8.5</span></p>
              <p>A Cool Fish</p>
              <p>剧情,喜剧,犯罪</p>
              <p>2018-11-16</p>
            </div>
        </li>-->
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Search",
  data() {
    return {
      message: "",
      moviesList: []
    };
  },
  methods:{
     cancelRequest(){
            if(typeof this.source ==='function'){
                this.source('终止请求')
            }
        }
  },
  //watch可以检测到某个值变化，异步代码也可以检测到
  watch: {
    message(newVal) {
      //解决防抖  第一种方法 延时器
      // let timer = null;
      // clearTimeout(timer)
      // timer = setTimeout(() => {
      //   this.$service
      //     .get(`/ajax/search?kw=${newVal}&cityId=10`)
      //     .then(res => {
      //       console.log(res.data.movies.list);
      //       if (res.data.movies.list) {
      //         this.moviesList = res.data.movies.list;
      //       }
      //     });
      // }, 4000);


      //第二种方法  vue-axios自带的
      this.cancelRequest()
      var that=this
       this.$service.get(`/ajax/search?kw=${newVal}&cityId=10`,{
          cancelToken: new this.axios.CancelToken(function executor(c) {
                    that.source = c;
                })
       })
          .then(res => {
            console.log(res.data.movies.list);
            if (res.data.movies.list) {
              this.moviesList = res.data.movies.list;
            }
          })
          .catch((err) => {
                if (this.axios.isCancel(err)) {
                    console.log('Rquest canceled', err.message); //请求如果被取消，这里是返回取消的message
                } else {
                    console.log(err);
                }
            })

    }
  }
};
</script>
<style lang="scss" scoped>
#content .search_body {
  width:100%;
  flex: 1;
  overflow: auto;
  .search_input {
    padding: 8px 10px;
    background-color: #f5f5f5;
    border-bottom: 1px solid #e5e5e5;
    .search_input_wrapper {
      padding: 0 10px;
      border: 1px solid #e6e6e6;
      border-radius: 5px;
      background-color: #fff;
      display: flex;
      line-height: 20px;
      i {
        font-size: 16px;
        padding: 4px 0;
      }
      input {
        width: 100%;
        border: none;
        font-size: 13px;
        outline: none;
        color: #333;
        padding: 4px 0;
        margin-left: 5px;
      }
    }
  }
  .search_result {
    background-color: #fff;
    h3 {
      height: 30px;
      line-height: 30px;
      font-size: 15px;
      font-weight: 600;
      color: #999;
      padding: 9px 15px;
      border-bottom: 1px solid #e5e5e5;
    }
    ul li {
      border-bottom: 1px dashed #c9c9c9;
      padding: 10px 15px;
      box-sizing: border-box;
      display: flex;
      .img {
        width: 60px;
        img {
          width: 100%;
        }
      }
      .info {
        margin-left: 15px;
        flex: 1;
        p {
          height: 22px;
          display: flex;
          line-height: 22px;
          font-size: 12px;
        }
        p:nth-of-type(1) {
          span:nth-of-type(1) {
            font-size: 18px;
            flex: 1;
          }
          span:nth-of-type(2) {
            font-size: 16px;
            color: #fc7103;
          }
        }
      }
    }
  }
}
</style>