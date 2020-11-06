<template>
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
</script>
<style lang="scss" scoped>
    
</style>