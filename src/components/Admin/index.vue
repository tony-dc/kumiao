<template>
  <div>
    <el-container>
      <el-header>酷喵电影后台管理系统 欢迎：{{$store.state.user.nm}}</el-header>
      <el-container>
        <el-aside width="200px">
            <el-menu
              default-active="1"
            >
              <el-menu-item index="1">
                  <i class="el-icon-location"></i>
                  <router-link to='/admin/user' slot="title" tag='span'>用户管理</router-link>
              </el-menu-item>
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <router-link to='/admin/adminmovies' slot="title" tag='span'>电影管理</router-link>
              </el-menu-item>
              <el-menu-item index="3">
                <i class="el-icon-document"></i>
                <router-link to='/admin/admincinemas' slot="title" tag='span'>影院管理</router-link>
              </el-menu-item>
            </el-menu>
        </el-aside>
        <el-container>
          <el-main>
             <router-view />
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: "admin",
  //前置路由守卫
  beforeRouteEnter: (to, from, next) => {
     axios.get('/api2/admin').then(res=>{
         const result=res.data.status
         console.log(res)
         if(result===0){
           next(vm=>{
              vm.$store.commit("user/USER_INFO", {
                      nm: res.data.data.username,
                      isAdmin:res.data.data.isAdmin
                    })
           })
         }else{
           next('/mine/login')  
         }
       })
  },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
};
</script>
<style lang="scss" scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #fff;
  text-align: left;
  font-size: 20px;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>