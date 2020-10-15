<template>
  <footer id="footer">
    <ul>
      <router-link  to='/movie' tag="li">
        <i class="iconfont icon-dianying"></i>
        <p>电影</p>
      </router-link>
      <router-link to='/cinema' tag="li">
        <i class="iconfont icon-yingyuan"></i>
        <p>影院</p>
      </router-link>
      <router-link to='/mine' tag="li">
        <i class="iconfont icon-wode"></i>
        <p>我的</p>
      </router-link>
    </ul>
  </footer>
</template>
<script>
export default {
  name: "TabBar"
};
</script>
<style lang="scss" scoped>
    #footer{
        position:fixed;
        bottom:0px;
        left:0px;
        width:100%;
        height: 50px;
        border-top:2px solid #ebe8e3;
        background-color: #fff;
        ul{
            display: flex;
            height: 50px;
            align-items:center;
            text-align: center;
             //vue自带的，给路由当中选中的那个添加样式
            li.router-link-active{
                 color:#f03d37;
            }
            li{
                flex:1;
                height: 40px;
                i{
                    font-size:20px;
                }
                p{
                    font-size:12px;
                    line-height: 18px;
                }
            }
        }
    }
</style>