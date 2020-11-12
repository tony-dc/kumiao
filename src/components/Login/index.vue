<template>
  <div class="login_body">
    <div>
      <input
        v-model="username"
        class="login_text"
        type="text"
        placeHolder="账户名/手机号/Email"
      />
    </div>
    <div>
      <input
        v-model="password"
        class="login_text"
        type="password"
        placeHolder="请输入您的密码"
      />
    </div>
    <div>
<<<<<<< HEAD
      <input
        v-model="verifyImg"
        class="login_text"
        type="text"
        placeHolder="请输入验证码"
      />
      <div class="verifylign">
          <img class='img' src="/api2/users/verifyImg" alt="" >
          <span class="changeImg" @touchstart='handlechangeVerifyImg'>看不清楚换一张</span>
      </div>
=======
       <input type="text" class="login_text" v-model='verifyImg' placeHolder="请输入验证码"><img src="/api2/users/verifyImg" alt="" @touchstart='handleToverifyImg'>
>>>>>>> 20ababc2e83840c68415b665f446bdce3ac4cf3e
    </div>
    <div class="login_btn">
      <input type="submit" value="登录" @touchstart="handleToLogin" />
    </div>
    <div class="login_link">
      <router-link to='/mine/register'>立即注册</router-link>
      <router-link to='/mine/findpassword'>找回密码</router-link>
    </div>
  </div>
</template>
<script>
import { messageBox } from "../JS";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
<<<<<<< HEAD
      verifyImg:""
=======
      verifyImg:''
>>>>>>> 20ababc2e83840c68415b665f446bdce3ac4cf3e
    };
  },
  methods: {
    handleToLogin() {
      const This = this;
      this.$axios
        .post("/api2/users/login", {
          username: this.username,
          password: this.password,
          verifyImg:this.verifyImg
        })
        .then((res) => {
          const result = res.data.status;
          console.log(result)
          if (result === 0) {
            messageBox({
              title: "登录状态",
              content: res.data.msg,
              ok: "确定",
              handleOk() {
                This.$router.push("/mine/center")
              }
            });
          } else {
            messageBox({
              title: "登录状态",
              content: res.data.msg,
              ok: "确定",
            });
          }
        });
    },
<<<<<<< HEAD
    handlechangeVerifyImg(){
       const img=document.querySelector('.img')
       img.src='/api2/users/verifyImg?'+Math.random()
    }
  },
=======
    //点击切换随机验证码
    handleToverifyImg(ev){
       ev.target.src='/api2/users/verifyImg?'+Math.random()
    }
  }
>>>>>>> 20ababc2e83840c68415b665f446bdce3ac4cf3e
};
</script>
<style lang="scss" scoped>
#content .login_body {
  background-color: #fff;
  div {
    .login_text {
      width: 100%;
      height: 40px;
      padding: 0;
      border: none;
      outline: none;
      border-bottom: 1px solid #ccc;
      text-indent: 10px;
      margin-bottom: 5px;
    }
    .verifylign{
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      .img{
           flex:1
          }
      .changeImg{
           flex: 1;
           display: block;
           height:30px;
           width: 140px;
           line-height: 30px;
           font-size:18px;
           color:#e54847;
           text-align: center;
           padding: 10px;
           border:1px solid #eee;
           border-radius:10px;
           background-color: #eee;
      }
    }
     
     
  }

  .login_btn {
    height: 50px;
    margin: 10px;
    clear: both;
    input {
      width: 100%;
      height: 100%;
      border: none;
      display: block;
      border-radius: 3px;
      font-size: 20px;
      color: white;
      background-color: #e54847;
    }
  }
  .login_link {
    display: flex;
    justify-content: space-between;
    a {
      color: #e54847;
      font-size: 10px;
      text-decoration: none;
      margin: 0 5px;
    }
  }
}
</style>