<template>
  <div>
       个人中心:{{$store.state.user.nm}}
       <button @touchstart='handleToBack'>退出</button>
       <div v-if='$store.state.user.isAdmin'>用户权限：管理员 
       <a href="/admin" target="_blank">管理员界面</a></div>
       <div v-else>用户权限：普通用户</div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'center',
    //路由前置守卫
     beforeRouteEnter (to, from, next) {
       axios.get('/api2/users/getUser').then(res=>{
         const result=res.data.satus
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
    methods:{
      handleToBack(){
          this.$axios.get('/api2/users/logout').then(res=>{
            const result=res.data.status
            if(result===0){
               this.$store.commit('user/USER_INFO',{nm:'',isAdmin:false})
               this.$router.push('/mine/login')
            }
          })
      }
    }
}
</script>
<style lang="scss" scoped>
    
</style>