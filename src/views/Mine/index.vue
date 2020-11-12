<template>
    <div>
        <Header  :title='title'  />
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
        data(){
            return {
                title:'登录酷喵'
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