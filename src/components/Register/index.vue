<template>
  <div class="register_body">
    <div class="register_content">
      <h2>欢迎注册网站会员!<i></i></h2>
      <ul>
        <li><span>用 户 名</span><i>:</i><input v-model="username" type="text" value="" /></li>
        <li><span>设置密码</span><i>:</i><input id='psd' v-model="password" type="password" value="" /></li>
        <li><span>确认密码</span><i>:</i><input id='curpsd' v-model="currentpsd" type="password" value="" /></li>
        <li class="verify">
        <span>邮箱</span>
        <i>:</i>
        <input v-model="email" type="text" value="" />
        <button class="btn" @touchstart='handleGetverify'>验证码</button>
        </li>
        <li>
        <span>验 证 码</span>
        <i>:</i> 
        <input v-model="verify" type="text" value="" /></li>
        <li class="register_li">
          <button class="register_btn" @touchstart='handleToRegister'>立即注册</button>
        </li>
      </ul>
      <div class="login_link">
      <router-link to='/mine/login'>立即登录</router-link>
      <router-link to='/mine/findpassword'>找回密码</router-link>
    </div>
    </div>
  </div>
</template>
<script>
import {messageBox} from '../JS' 
export default {
  name: "register",
  data(){
    return {
        username:'',
        password:'',
        currentpsd:'',
        email:'',
        verify:'',
    }
  },
  methods:{
    //点击获得验证码方法
    handleGetverify(){
       if(this.email){
         this.$axios.get('/api2/users/verify?email='+this.email).then(res=>{
           const status=res.data.status
           if(status===0){
              messageBox({
                 title:'发送验证码',
                 content:'发送成功',
                 ok:'确定'
              })
           }else{
             messageBox({
                 title:'验证码',
                 content:'发送失败',
                 ok:'确定'
              })
           }
         })
       }else{
         messageBox({
           title:'验证码',
           content:'邮箱不能为空',
           ok:"确定"
         })
       }
    },
    //点击注册方法
    handleToRegister(){
      //复制this
      const This=this
      //判断用户输入情况
      if(this.email!==''&&this.username!==''&&this.password!==''&&this.verify!==''&&this.currentpsd!==''){
           //密码确认机制，必须两次一次才发起请求
          if(this.password===this.currentpsd){
            console.log(11)
            this.$axios.post('/api2/users/register',{
              'username':this.username,
              'password':this.password,
              email:this.email,
              verify:this.verify
          }).then(res=>{
                const status=res.data.status
                console.log(status)
                if(status===0){
                  messageBox({
                    title:'注册',
                    content:res.data.msg,
                    ok:'确定',
                    handleOk(){
                      This.$router.push('/mine/login')
                    }
                  })
                }else{
                  messageBox({
                    title:'注册',
                    content:res.data.msg,
                    ok:'确定'
                  })
                }
          })
          }else{
                messageBox({
                titile:'密码错误',
                content:'两次输入密码不一致，请重新输入！',
                ok:'确定',
                handleOk(){
                  
                }
        })
          }
      }else{
        messageBox({
          title:'注册失败',
          content:'注册信息填写不完整！',
          ok:'确定'
        })
      }
      
    }
  }
};
</script>
<style lang="scss" scoped>
.register_body {
   width: 100%;
   height:100%;
    background: rgb(138, 143, 165, 0.1);
  .register_content {
      padding:10px 20px;
      // background: rgb(138, 143, 165, 0.1);
    h2 {
      height: 30px;
      padding: 5px 5px;
      font-size: 18px;
      // text-align: center;
      line-height: 30px;
      color: rgb(131,179,55,.6);
      border-bottom: 1px solid rgba(204,204,204,.4);
    }
    ul {
      width: 100%;
      li {
        width: 100%;
        height: 60px;
        list-style: none;
        text-align: center;
        border:none;
        position: relative;
        line-height: 60px;
        i{
             position: absolute;
             left:110px;
             top:-1px;
           }
        span {
           display: inline-block;
           width:80px;
           margin-right:5px;
           position: relative;
        }
        input {
          width: 180px;
          height: 26px;
          outline: none;
           border:none;
           border-radius:10px;
        }
      }
      .verify{
        span{
            
          letter-spacing: 15px;
        }
        .btn{
          position: absolute;
          right:-23px;
          top:17px;
          border-radius:10px;
          font-size:16px;
          padding:5px;
          outline: none;
          border:none;
          color:#58a
        }
      }
      .register_li{
            width:100%;
          .register_btn{
            font-size:18px;
             outline: none;
              border:none;
              color:#fff;
              padding:8px 18px;
              background-color: rgb(131,179,55);
              border-radius:15px;
          }
      }
       li::before{
          content: '';
          position: absolute;
          bottom:0;
          left:0;
          width:100%;
          border-bottom:1px solid rgba(204,204,204,.4);
        }

    }
    .login_link {
    display: flex;
    justify-content: space-between;
    a {
      color: #e54847;
      font-size: 14px;
      padding:8px 5px;
      text-decoration: none;
      margin: 0 5px;
    }
  }
  }
}
</style>