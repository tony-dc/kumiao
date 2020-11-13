<template>
  <div id="main">
    <Header title="个人中心" />
    <div class="selfInfo">
      <div class="selfImg">
        <img :src="$store.state.user.userHeader" alt="用户头像" class="img-default" />
         <input type="file" name="file" value="" @change="handleToupload" />
        <p>
         <span>欢迎:</span>
         <span v-if="$store.state.user.isAdmin">
          <a href="/admin" target="_blank" class="admin">管理员</a>
        </span>
        <span v-else>普通会员</span>：
          <span class="userInfo">{{$store.state.user.nm}}</span>
        </p>
        <button @touchstart="handleToBack" class="back">退出</button>
      </div>
      <div class="center">
        <h2>我的订单</h2>
        <div>
          <div>
            <i class="iconfont "></i>
           <span>电影</span>
            </div>
          <div>
            <div>
                <i class="iconfont "></i>
            </div>
             <span>商城</span> 
            </div>
        </div>
      </div>
        <div class="list">
          <ul>
            <li>在线观影</li>
            <li>优惠券</li>
            <li>折后卡</li>
          </ul>
        </div>
     
      <p>
      </p>
    </div>
    <!-- <TabBar />   -->
  </div>
</template>
<script>
import { messageBox } from "@/components/JS";
import axios from "axios";
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
export default {
  name: "center",
  components: {
    Header,
    TabBar
  },
  //路由前置守卫
  beforeRouteEnter(to, from, next) {
    axios.get("/api2/users/getUser").then(res => {
      const result = res.data.status;
      console.log(res);
      if (result === 0) {
        next(vm => {
          vm.$store.commit("user/USER_INFO", {
            nm: res.data.data.username,
            isAdmin: res.data.data.isAdmin,
            userHeader: res.data.data.userHeader
          });
        });
        window.localStorage.setItem("username", res.data.data.username);
      } else {
        next("/mine/login");
      }
    });
  },
  methods: {
    handleToBack() {
      this.$axios.get("/api2/users/logout").then(res => {
        const result = res.data.status;
        if (result === 0) {
          this.$store.commit("user/USER_INFO", {
            nm: "",
            isAdmin: false,
            userHeader: ""
          });
          this.$router.push("/mine/login");
        }
      });
    },
    handleToupload(ev) {
      let This = this;
      let file = ev.target.files[0];
      //定义一个表单传输
      let param = new FormData();
      param.append("file", file, file.name);
      //配置请求头信息
      let config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };
      this.$axios
        .post("/api2/users/updateuserHeader", param, config)
        .then(res => {
          const status = res.data.status;
          console.log(res);
          if (status === 0) {
            messageBox({
              title: "更改头像",
              content: "更改成功",
              ok: "确定",
              handleOk() {
                This.$store.commit("user/USER_INFO", {
                  nm: This.$store.state.user.nm,
                  isAdmin: This.$store.state.user.isAdmin,
                  //为了清除缓存
                  userHeader: res.data.data.userHeader + "?" + Math.random()
                });
              }
            });
          } else {
            messageBox({
              title: "更改头像",
              content: "更改失败",
              ok: "确定"
            });
          }
        });
    }
  }
};
</script>
<style lang="scss" scoped>
#content #main {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  .selfInfo {
    //  position: relative;
    width: 100%;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    .selfImg {
      width: 100%;
      height: 120px;
      position: relative;
      background-color: #e44040;
      text-align: center;
      .img-default,input{
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 60px;
        height: 60px;
        border-radius: 50%;
      }
      input{
        z-index: 50;
        opacity: 0;
      }
      p {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 0;
        height: 16px;
        font-size: 14px;
        color: rgb(231, 245, 245);
        line-height: 16px;
        text-align: center;
        padding: 5px;
        span{
          padding:5px;
          letter-spacing: 2px;
          a{
            text-decoration: none;
            color:skyblue;
            padding:3px;
            cursor:pointer;
          }
        }
        .userInfo {
          font-size: 18px;
          font-weight: bold;
          color: skyblue;
        }
      }
      .back {
        position: absolute;
        bottom: 0;
        right: 0px;
        letter-spacing: 2px;
        border: none;
        border-radius: 5px;
        padding: 3px;
        color: slateblue;
      }
    }
  }
  .center{
    // width:300px;
    h2{
      width:100%;
      height:60px;
      line-height: 60px;
      text-align: center;
      font-size:18px;
    }
  }
}
</style>