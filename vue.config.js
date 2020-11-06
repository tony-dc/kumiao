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

        }
    }
}