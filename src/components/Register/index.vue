<template>
<<<<<<< HEAD
    <div>
         注册页：
    </div>
</template>
<script>
export default {
     name:'register'
    }
</script>
<style lang="scss" scoped>
    
=======
  <div class="register_body">
    <div class="register_content">
      <h2>欢迎注册网站会员<i></i></h2>
      <ul>
        <li><span>用户名:</span><input type="text" value="" /></li>
        <li><span>设置密码:</span><input type="text" value="" /></li>
        <li><span>确认密码:</span><input type="text" value="" /></li>
        <li class="verify">
        <span>邮箱:</span>
        <input type="text" value="" />
        <button>验证码</button>
        </li>
        <li><span>验证码: </span><input type="text" value="" /></li>
        <li>
          <button>立即注册</button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "register",
};
</script>
<style lang="scss" scoped>
.register_body {
  width: 100%;
  height: 100%;
  background-color: rgb(138, 143, 165, 0.2);
  .register_content {
      padding:10px 20px;
    h2 {
      height: 30px;
      padding: 5px 5px;
      font-size: 20px;
      text-align: center;
      line-height: 30px;
      color: #58a;
      border-bottom: 1px solid red;
    }
    ul {
      width: 100%;
      height: 300px;
      li {
        // margin-top: 10px;
        width: 100%;
        height: 60px;
        text-align: center;
        line-height: 60px;
        border-bottom:1px solid #888;
        span {
          width: 72px;
          line-height: 60px;
          margin-right: 10px;
        }
        input {
          width: 200px;
          height: 20px;
        }
      }
      .verify{
        display: flex
      }
    }
  }
}
>>>>>>> abaa3d056be3139bbae09df4aa595ae0e8ddc3dc
</style>