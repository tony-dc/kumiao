<template>
  <div class="register_body">
    <div class="register_content">
      <h2>欢迎注册网站会员<i></i></h2>
      <ul>
        <li><span>用&emsp;户&emsp;名:</span><input type="text" value="" /></li>
        <li><span>设置密码:</span><input type="text" value="" /></li>
        <li><span>确认密码:</span><input type="text" value="" /></li>
        <li class="verify">
        <span>邮&emsp;&emsp;&emsp;&emsp;&emsp;箱:</span>
        <input type="text" value="" />
        <button class="btn">验证码</button>
        </li>
        <li><span>验 证 码: </span><input type="text" value="" /></li>
        <li class="register_li">
          <button class="register_btn">立即注册</button>
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
      border-bottom: 1px solid #ccc;
    }
    ul {
      width: 100%;
      height: 300px;
      li {
        width: 100%;
        height: 60px;
        list-style: none;
        text-align: center;
        border:none;
        line-height: 60px;
        border-bottom:1px solid #888;
        // span {
          

        //   // margin-right: 10px;
        // }
        input {
          width: 200px;
          height: 22px;
          outline: none;
           border:none;
           border-radius:5px;
        }
      }
      .verify{
        // display: flex;
        // justify-content: space-around;
        // align-items: center;
        position: relative;
        span{
          margin-right:20px;
        }
        .btn{
          position: absolute;
          right:-23px;
          top:19px;
          border-radius:5px;
          font-size:16px;
          padding:3px;
          outline: none;
          border:none;
          color:#58a
        }
      }
      .register_li{
          .register_btn{
            // width:150px;
            // height:40px;
            font-size:22px;
             outline: none;
              border:none;
              // line-height: 40px;
              color:#fff;
              padding:8px 10px;
              background-color: green;
              border-radius:15px;
          }
      }

    }
  }
}
</style>