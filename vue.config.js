module.exports={
    devServer:{
        proxy:{
           '/api':{
            //    target:'http://localhost:5000',
            //    pathRewrite:{
            //        'api':'/'
            //    }
            target:'http://m.maoyan.com',
            changOrigin:true,
            pathRewrite:{
                   '^/api':''
               }
           }
        //    ,
        //    '/epi':{
        //     target:'http://maoyan.com',
        //     changOrigin:true,
        //     pathRewrite:{
        //            '^/epi':''
        //        }
        //    }
        }
    }
}