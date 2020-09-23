<template>
    <div>
        <Header />
        <TabBar />
    </div>
</template>
<script>
  import Header from '@/components/Header'
  import TabBar from '@/components/TabBar'
    export default {
        name:'Movie',
        components:{
            Header,
            TabBar
        }
    }
</script>
<style lang="scss">
    
</style>