<template>
  <div class="findpassword_body">
    <div class="findpassword_content">
      <h2>修改密码</h2>
      <ul>
        <li>
          <span>旧密码</span><i>:</i
          ><input v-model="oldpsd" type="password" value="" />
        </li>
        <li>
          <span>新密码</span><i>:</i
          ><input id="newpsd" v-model="password" type="password" value="" />
        </li>
        <li class="verify">
          <span>邮箱</span>
          <i>:</i>
          <input v-model="email" type="text" value="" />
          <button class="btn" @touchstart="handleGetverify" :disabled='disabled'>{{verifyInfo}}</button>
        </li>
        <li>
          <span>验 证 码</span>
          <i>:</i>
          <input v-model="verify" type="text" value="" />
        </li>
        <li class="findpassword_li">
          <button class="findpassword_btn" @touchstart="handleToUndatePassword">
            立即修改
          </button>
        </li>
      </ul>
      <div class="login_link">
        <router-link to="/mine/login">立即登录</router-link>
        <router-link to="/mine/register">立即注册</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import {messageBox} from '../JS' 
export default {
  name: "findpassword",
  data() {
    return {
      oldpsd: "",
      password: "",
      email: "",
      verify: "",
      verifyInfo:'验证码',
      disabled:false
    };
  },
  methods: {
    //提交验证码功能
    handleGetverify() {
      const This=this
      if (this.email) {
        this.$axios
          .get("/api2/users/verify?email=" + this.email)
          .then((res) => {
            const status = res.data.status;
            if (status === 0) {
              messageBox({
                title: "发送验证码",
                content: "发送成功",
                ok: "确定",
                handleOk(){
                   This.getTime()
                }
              });
            } else {
              messageBox({
                title: "验证码",
                content: "发送失败",
                ok: "确定",
              });
            }
          });
      } else {
        messageBox({
          title: "验证码",
          content: "邮箱不能为空",
          ok: "确定",
        });
      }
    },
   handleToUndatePassword(){
        const This=this
      //判断用户输入情况
      if(this.email!==''&&this.oldpsd!==''&&this.password!==''&&this.verify!==''){
          this.$axios.post('/api2/users/findpassword',{
              password:this.password,
              email:this.email,
              verify:this.verify
          }).then(res=>{
             const result=res.data.status
             if(result===0){
                 messageBox({
                     title:'修改密码',
                     content:res.data.msg,
                     ok:"确定",
                     handleOk(){
                         This.$router.push('/mine/login')
                     }
                 })
             }else{
                 messageBox({
                     title:'修改密码',
                     content:res.data.msg,
                     ok:"确定"
                 })
             }
          })
      }else{
          messageBox({
              title:'修改密码',
              content:'修改失败，信息不完整',
              ok:"确定"
          })
      }
   },
    getTime(){
      let count=60;
      let timer=setInterval(()=>{
         count--
         this.verifyInfo='剩余'+count+'秒'
         this.disabled=true
         if(count===0){
             this.verifyInfo='验证码'
             this.disabled=false
             clearInterval(timer)
         }
      },1000)
    }
  },
};
</script>
<style lang="scss" scoped>
.findpassword_body {
  width: 100%;
  .findpassword_content {
    padding: 10px 20px;
    background-color: rgb(138, 143, 165, 0.1);
    h2 {
      height: 30px;
      padding: 5px 5px;
      font-size: 18px;
      // text-align: center;
      line-height: 30px;
      color: rgb(131, 179, 55, 0.6);
      border-bottom: 1px solid rgba(204, 204, 204, 0.4);
    }
    ul {
      width: 100%;
      li {
        width: 100%;
        height: 60px;
        list-style: none;
        text-align: center;
        border: none;
        position: relative;
        line-height: 60px;
        i {
          position: absolute;
          left: 110px;
          top: -1px;
        }
        span {
          display: inline-block;
          width: 80px;
          margin-right: 5px;
          position: relative;
        }
        input {
          width: 180px;
          height: 26px;
          outline: none;
          border: none;
          border-radius: 10px;
        }
      }
      .verify {
        span {
          letter-spacing: 15px;
        }
        .btn {
          position: absolute;
          right: -23px;
          top: 17px;
          border-radius: 10px;
          font-size: 16px;
          padding: 5px;
          outline: none;
          border: none;
          color: #58a;
        }
      }
      .findpassword_li {
        width: 100%;
        .findpassword_btn {
          font-size: 18px;
          outline: none;
          border: none;
          color: #fff;
          padding: 8px 18px;
          background-color: rgb(131, 179, 55);
          border-radius: 15px;
        }
      }
      li::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        border-bottom: 1px solid rgba(204, 204, 204, 0.4);
      }
    }
    .login_link {
      display: flex;
      justify-content: space-between;
      a {
        color: #e54847;
        font-size: 14px;
        padding: 8px 5px;
        text-decoration: none;
        margin: 0 5px;
      }
    }
  }
}
</style>