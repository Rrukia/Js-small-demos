// 1 引入模块/包/路由
const express = require('express')
const cors = require('cors')    // Cross-origin resource sharing
// 1.1 创建 express 实例
const app = express()

// 2 导入路由
const myRouter = require('./router/myRouter.js')

// use() 注册启用中间件
// 全局中间件要在 注册路由模块/挂载路由 之前注册启用
app.use(express.urlencoded({ extended: false }))    // expres.urlencoded 中间件，解决中文编码问题
app.use(cors())    // CORS 中间件，通过处理响应头解决跨域问题     PS：JSONP方法需要在 CORS 启用之前注册

// 2.1 注册路由,添加前置路径
app.use('/api',myRouter)

// 3 在80端口打开 web 服务器
app.listen(80, () => {
    console.log('express server running at http://localhost')
})