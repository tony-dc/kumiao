import Vue from 'vue'
import MessageBox from './Messagebox'
export let messageBox=(function(){
    
    return function(options){  //配置参数
        let defaults={        //默认值,
            title: '' ,  
            content:'',
            cancel:'',
            ok:'',
            handleCancel:null,
            handleOk:null
      }
       let Mycomponent=Vue.extend(MessageBox)
         for(let key in options){
            defaults[key]=options[key]
         }
         let vm=new Mycomponent({
             el:document.createElement('div'),
             data:{
                 title:defaults.title,
                 content:defaults.content,
                 cancel:defaults.cancel,
                 ok:defaults.ok
             },
             methods:{
                 handleCancel(){
                     defaults.handleCancel&&defaults.handleCancel.call(this)
                     document.body.removeChild(vm.$el)
                 },
                 handleOk(){
                    defaults.handleOk&&defaults.handleOk.call(this)
                    document.body.removeChild(vm.$el)
                 }
             }
         })
         document.body.appendChild(vm.$el)
    }
})()