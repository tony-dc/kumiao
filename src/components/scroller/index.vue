<template>
  <div class="swapper" ref="swapper">
    <slot></slot>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  name: "scroller",
  props:{
     handleToScroll:{
        type:Function,
        default:function(){}
     },
     handleToTouchEnd:{
        type:Function,
        default:function(){}
     }
  },
  methods:{
    toScrollTop(y){
        //点击跳转到到指定位置
         this.scroll.scrollTo(0,y)
    }
  },
  mounted() {
    //实现公共组件betterscroll组件功能,nextTick当数据加载完以后实现scroll功能
    // this.$nextTick(() => {
      var scrolls = new BScroll(this.$refs.swapper, {
        tap:true, 
        click:true,
        touchstart:true,
        probeType: 1
      });
      this.scroll=scrolls
       scrolls.on('scroll',(pos)=>{
           this.handleToScroll(pos)
       });
       scrolls.on('touchEnd',(pos)=>{
           this.handleToTouchEnd(pos)
       })
    // });
  }
};
</script>
<style>
.swapper {
  height: 100%;
}
</style>