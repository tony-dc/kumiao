<template>
    <div>
        <Header  title='登录酷喵'  />
        	<div id="content">
                <router-view />  
        	</div>
        <TabBar />
    </div>
</template>
<script>
    import Header from '@/components/Header'
    import TabBar from '@/components/TabBar' 
    export default {
        name:'Mine',
        components:{
            Header,
            TabBar
        }
    }
</script>
<style lang="scss">
    
</style>