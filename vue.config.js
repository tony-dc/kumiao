module.exports={
    devServer:{
        proxy:{
            //反向代理
            '/api2':{
                target:'http://localhost:3000',
                changOrigin:true,
                pathRewrite:{
                       '^/api2':''
                   }
               },
           '/api':{
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