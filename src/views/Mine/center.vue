<template>
  <div>
       个人中心:{{$store.state.user.nm}}
       <button @touchstart='handleToBack'>退出</button>
       <div v-if='$store.state.user.isAdmin'>用户权限：管理员 
       <a href="/admin" target="_blank">管理员界面</a></div>
       <div v-else>用户权限：普通用户</div>
       <div>
          用户头像：<input type="file" name="file" value="上传头像" @change="handleToHeader">
          <img :src="$store.state.user.userHeader" alt="">
       </div>
       
  </div>
</template>
<script>
import axios from 'axios'
import {messageBox} from '@/components/JS'
export default {
    name:'center',
    //路由前置守卫
     beforeRouteEnter (to, from, next) {
       axios.get('/api2/users/getUser').then(res=>{
         const result=res.data.status
         console.log(res)
         if(result===0){
           next(vm=>{
              vm.$store.commit("user/USER_INFO", {
                      nm: res.data.data.username,
                      isAdmin:res.data.data.isAdmin,
                      userHeader:res.data.data.userHeader
                    })
           })
          window.localStorage.setItem('username',res.data.data.username)
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
      },
      //当input发生改变时触发
      handleToHeader(ev){
          const file=ev.target.files[0]
          const This=this
          const param=new FormData()
          param.append('file',file)
          const config={
             headers:{
               "Content-Type":'multipart/form-data'
             }
          }
          this.$axios.post('/api2/users/uploaduserHeader',param,config).then((res)=>{
            const status=res.data.status
            if(status===0){
               messageBox({
                 title:'修改用户头像',
                 content:'修改成功',
                 ok:'确定',
                 handleOk(){
                     This.$store.commit("user/USER_INFO", {
                      nm: This.$store.state.user.nm,
                      isAdmin:This.$store.state.user.isAdmin,
                      //请缓存方法
                      userHeader:res.data.data.userHeader+'?'+Math.random()
                    })
                 }
               })
            }else{
               messageBox({
                 title:'修改用户头像',
                 content:'修改失败',
                 ok:'确定'
               })
            }
          })
      }
    }
}
</script>
<style lang="scss" scoped>
    
</style>