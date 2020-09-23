<template>
    <div> 
        <Header  :title='title'  />
        <TabBar />
    </div>
</template>
<script>
  import Header from '@/components/Header'
  import TabBar from '@/components/TabBar'
    export default {
        name:'Cinema',
        data(){
          return {
              title:'酷喵影院'
          }
        },
         components:{
            Header,
            TabBar
        }
    }
</script>
<style lang="scss">
    
</style>