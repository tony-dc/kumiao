<template>
  <div>
    <Header />
    <div id="content">
      <div class="movie_menu">
        <router-link class="city_name" tag="div" to="/movie/city">
          <span>{{$store.state.city.nm}}</span>
          <i class="iconfont icon-lower-triangle"></i>
        </router-link>
        <div class="hot_swtich">
          <router-link class="hot_item" to="/movie/nowplaying" tag="div">正在热映</router-link>
          <router-link class="hot_item" to="/movie/comingsoon" tag="div">即将上映</router-link>
        </div>
        <router-link class="search_entry" tag="div" to="/movie/Search">
          <i class="iconfont icon-sousuo"></i>
        </router-link>
      </div>
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
    <TabBar />
   <router-view name="detail" />
  </div>
</template>
<script>
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
import { messageBox } from "@/components/JS";
export default {
  name: "Movie",
  components: {
    Header,
    TabBar
  },
  mounted() {
      //延时3s展示给用户
    setTimeout(() => {
    //   this.$service.get("/ajax/getLocation").then(res => {
    //     console.log(res);
    //     let nm=res.data.data.nm,
    //         id=res.data.data.id
    //         //判断当选择城市和获取城市一致时不弹窗
    //     if(this.$store.state.city.id===id) return 
    //     messageBox({
    //       title: '定位',
    //       content: nm,
    //       cancel: "取消",
    //       ok: "切换城市",
    //       //处理当点击切换的时候,修改本地存储来改变城市
    //       handleOk() {
    //           this.$store.state.city.nm=nm
    //           this.$store.state.city.id=id
    //       }
    //     });
    //   });
      
     //数据模拟写死版
     let nm='上海'
     console.log(this.$store.state.city.nm)
       //判断当选择城市和获取城市一致时不弹窗
      if(this.$store.state.city.nm==nm) return 
      messageBox({
          title: '定位',
          content:nm ,
          cancel: "取消",
          ok: "切换城市",
          //处理当点击切换的时候,修改本地存储来改变城市
          handleOk() {
              window.localStorage.setItem('nm',nm)
              window.location.reload()
            //   this.$store.state.city.nm=nm
            //   this.$store.state.city.id=id
          }
        });
    }, 3000);
  }
};
</script>
<style lang="scss" scoped>
#content .movie_menu {
  width: 100%;
  height: 45px;
  display: flex;
  border-bottom: 1px solid #e6e6e6;
  justify-content: space-between;
  background-color: white;
  z-index: 10;
  align-items: center;
  .city_name {
    margin-left: 20px;
    height: 100%;
    line-height: 45px;
    box-sizing: border-box;
  }
  .city_name.active {
    color: #ef4238;
    border-bottom: 2px #ef4238 solid;
  }
  .city_name.router-link-active {
    color: #ef4238;
    border-bottom: 2px #ef4238 solid;
  }
  .hot_swtich {
    display: flex;
    height: 100%;
    line-height: 45px;
    .hot_item {
      font-size: 15px;
      color: #666;
      width: 80px;
      text-align: center;
      margin: 0 12px;
      font-weight: 700;
    }
    .hot_item.active {
      color: #ef4238;
      border-bottom: 2px #ef4238 solid;
    }
    .hot_item.router-link-active {
      color: #ef4238;
      border-bottom: 2px #ef4238 solid;
    }
  }
  .search_entry {
    margin-right: 20px;
    height: 100%;
    line-height: 45px;
    i {
      font-size: 24px;
      color: red;
    }
  }
  .search_entry.active {
    color: #ef4238;
    border-bottom: 2px #ef4238 solid;
  }
  .search_entry.router-link-active {
    color: #ef4238;
    border-bottom: 2px #ef4238 solid;
  }
}
</style>