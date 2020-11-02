module.exports = {
    devServer: {
        // 设置主机地址
        host: 'localhost',
        // 设置默认端口
        port: 8082,
        // 设置代理
        proxy: {
            '/api': {
                // 目标 API 地址
                // target: 'http://192.168.6.163:8080/',
                target: 'http://localhost:5001',
                // 如果要代理 websockets
                ws: true,
                // 将主机标头的原点更改为目标URL
                changeOrigin: false
            }
        }
    }
}
