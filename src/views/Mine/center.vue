<template>
<<<<<<< HEAD
    <div>
        个人中心
        <a href="" @touchstart='handleback'>退出</a>
    </div>
</template>
<script>
export default {
     name:'center',
     methods:{
         handleback(){
             this.$axios.get('/api2/users/logout')
             .then(res=>{
                 console.log(res)
                 const result=res.data.status
                 if(result===0){
                   this.$router.push('/mine/Login')
                 }
             })
         }
     }
    }
=======
  <div>
       个人中心:{{$store.state.user.nm}}
       <button @touchstart='handleToBack'>退出</button>
  </div>
</template>
<script>
export default {
    name:'center',
    data(){
       return {
          data:''
       }
    },
    //路由前置守卫
     beforeRouteEnter (to, from, next) {
           next(vm=>{
             console.log(vm.data)
          if(!vm.data) vm.$router.push('/mine/login')
           })
       },
      created(){
        this.data=this.$store.state.user.nm
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
>>>>>>> abaa3d056be3139bbae09df4aa595ae0e8ddc3dc
</script>
<style lang="scss" scoped>
    
</style>