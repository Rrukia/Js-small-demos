// 引入 express 模块
const express = require('express')
// 实例化 router
const router = express.Router()

// 挂载路由
router.get('/get', (req, res) => {
    let query = req.query

    let data = {
        status: 0,
        message: 'GET 请求成功！',
        data: query
    }

    res.send(data)
})

router.post('/post', (req, res) => {
    let body = req.body

    let data = {
        status: 0,
        message: 'POST 请求成功！',
        data: body
    }

    res.send(body)
})

// 将 router 暴露给对外接口
module.exports = router