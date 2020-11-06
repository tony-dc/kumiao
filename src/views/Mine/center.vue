<template>
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
</script>
<style lang="scss" scoped>
    
</style>