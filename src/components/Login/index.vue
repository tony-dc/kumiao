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
    };
  },
  methods: {
    handleToLogin() {
      const This = this;
      this.$axios
        .post("/api2/users/login", {
          username: this.username,
          password: this.password,
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
  },
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
  }
  .login_btn {
    height: 50px;
    margin: 10px;
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