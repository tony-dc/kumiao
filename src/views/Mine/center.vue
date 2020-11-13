<template>
  <div>
     <Header title="个人中心" />
     <div class="slefInfo">
         <img :src="$store.state.user.userHeader" alt="用户头像" class="img-default">
          <input type="file" name="file" value="上传头像" @change='handleToupload'> 
         <p>
           欢迎会员：{{$store.state.user.nm}}
           <span v-if="$store.state.user.isAdmin">
              用户权限：管理员 
             <a href="/admin" target="_blank">后台管理页面</a> 
             </span>
           <span v-else>用户权限：普通会员 </span>
           </p>
     </div>
       <h2>我的订单</h2>
        <div>
           <div>电影</div>
           <div>商城</div>
        </div>
        <div>
          <ul>
            <li>在线观影</li>
            <li>优惠券</li>
            <li>折后卡</li>
          </ul>
        </div>
       <button @touchstart='handleToBack'>退出</button>
<<<<<<< HEAD
       <div>
          
          <!-- <img :src="$store.state.user.userHeader" alt="" class="img-default"> -->
       </div>
=======
       <div v-if='$store.state.user.isAdmin'>用户权限：管理员 
       <a href="/admin" target="_blank">管理员界面</a></div>
       <div v-else>用户权限：普通用户</div>
       <div>
          用户头像：<input type="file" name="file" value="上传头像" @change="handleToHeader">
          <img :src="$store.state.user.userHeader" alt="">
       </div>
       
>>>>>>> 2e655e97f750ee07fbabc3d77191426664917ccc
  </div>
</template>
<script>
import {messageBox} from '@/components/JS'
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
               this.$store.commit('user/USER_INFO',
               {
               nm:'',
               isAdmin:false,
               userHeader:''
               }
               )
               this.$router.push('/mine/login')
            }
          })
      },
<<<<<<< HEAD
      handleToupload(ev){
       let This=this
       let file= ev.target.files[0]
       //定义一个表单传输
       let param=new FormData();
       param.append('file',file,file.name)
       //配置请求头信息
       let config={
         headers:{
           "Content-Type":'multipart/form-data'
         }
       }
       this.$axios.post('/api2/users/updateuserHeader',param,config)
       .then(res=>{
           const status=res.data.status
           console.log(res)
           if(status===0){
                messageBox({
                  title:'更改头像',
                  content:'更改成功',
                  ok:'确定',
                  handleOk(){
                      This.$store.commit("user/USER_INFO", {
                      nm: This.$store.state.user.nm,
                      isAdmin:This.$store.state.user.isAdmin,
                      userHeader:res.data.data.userHeader+'?'+Math.random()
                    })
                  }
                })
           }else{
                  messageBox({
                  title:'更改头像',
                  content:'更改失败',
                  ok:'确定'
                })
           }
       })
=======
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
>>>>>>> 2e655e97f750ee07fbabc3d77191426664917ccc
      }
    }
}
</script>
<style lang="scss" scoped>
.img-default{
  display:block;
  width: 150px;
  height: 150px;
  border-radius:50%;
}
</style>