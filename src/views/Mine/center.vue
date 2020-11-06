<template>
  <div>
       个人中心:{{$store.state.user.nm}}
       <button @touchstart='handleToBack'>退出</button>
  </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'center',
    //路由前置守卫
     beforeRouteEnter (to, from, next) {
       axios.get('/api2/users/getUser').then(res=>{
         const result=res.data.status
         if(result===0){
           next()
         }else{
           next('/mine/login')  
         }
       })
     },
     created(){
       console.log(this.$store.state.user.nm)
     },
    methods:{
      handleToBack(){
          this.$axios.get('/api2/users/logout').then(res=>{
            const result=res.data.status
            if(result===0){
               this.$store.commit('user/USER_INFO',{"nm":''})
               this.$router.push('/mine/login')
            }
          })
      }
    }
}
</script>
<style lang="scss" scoped>
    
</style>