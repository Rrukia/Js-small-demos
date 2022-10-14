// express + express-jwt + jsonwebtoken + cors
// 导入 express 模块，实例化 web 服务
const express = require('express')
const app = express()

// 导入 cors 中间件并部署，实现跨域资源共享
const cors = require('cors')
app.use(cors())

// 部署 express.urlencoded 中间件，解析 post 表单数据
// { extended: false }
app.use(express.urlencoded({ extended: false }))

// JWT_01. 导入 jsonwebtoken ， express-jwt 模块
const jwt = require('jsonwebtoken')
const expressJWT = require('express-jwt')

// JWT_02. 配置密钥
const secretKey = 'This is a str using to encode!'

// JWT_03. 部署 express-jwt 中间件，检测 token 令牌并解析挂载于 req.auth
// 此处部署为全局中间件，会导致所有路由都需要 token 令牌。
// 实际使用应部署在特定路由上
app.use(expressJWT.expressjwt({
    secret: secretKey,
    algorithms: ["HS256"]
}).unless({
    path: [/^\/api\//]
}))

// JWT_04. 为符合条件的请求生成并返回 token 令牌
// 挂载一个不需要 token 令牌，用于处理登录签发 token 令牌的简单路由
app.post('/api/login', (req, res) => {
    // 检测信息是否符合条件
    if (req.body.username !== 'admin' || req.body.password !== '123456') {
        return res.send({
            status: 400,
            message: '登陆失败'
        })
    }
    // 符合条件，生成并返回 token 令牌
    let tokenStr = 'Bearer ' + jwt.sign({ username: req.body.username }, secretKey, { expiresIn: '60s' })
    res.send({
        status: 200,
        message: '登陆成功',
        token: tokenStr
    })
})

// 挂载一个需要 token 令牌的静态资源
app.use(express.static('./resource'))

// 挂载一个需要 token 令牌的简单路由
app.get('/admin/loginInfo', (req, res) => {
    console.log(req.auth)
    res.send({
        status: 200,
        message: '请求成功',
        data: req.auth
    })
})

//  设置 err 中间件，接收 jwt err
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        return res.send({
            status: 401,
            message: 'token 错误: ' + err.message
        })
    }
    res.send({
        status: 500,
        message: '未知错误'
    })
})

// 在8080端口开启 web 服务
app.listen(8080, () => {
    console.log('express server running at http://localhost')
})
