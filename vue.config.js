<<<<<<< HEAD
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
=======
module.exports = {
    devServer: {
        proxy: {
            //请求本地服务器
            '/api2': {
                target: 'http://localhost:3000',
                changOrigin: true,
                pathRewrite: {
                    '^/api2': ''
                }
            },
            '/api': {
                target: 'http://m.maoyan.com',
                changOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }

>>>>>>> abaa3d056be3139bbae09df4aa595ae0e8ddc3dc
        }
    }
}