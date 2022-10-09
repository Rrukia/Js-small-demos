// 引用模块
const http = require('http');
const fs = require('fs');
const path = require('path');

// 实例化 web 服务器
const server = http.createServer();

// 绑定 request 事件，监听 request 请求
server.on('request', (req, res) => {
    const url = req.url;
    const method = req.method;
    let resPath;

    // 直接拼接路径 ↓↓↓
    // resPath = path.join(__dirname,url);

    // 优化拼接路径 ↓↓↓ 
    if (url === '/' || url === '/index.html') {
        resPath = path.join(__dirname, './index.html');
    } else {
        resPath = path.join(__dirname, './more/', url);
    }

    // res.setHeader 设置 'Content-Type' 为 'text/html; charset=utf-8' 防止中文乱码
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    // 根据路径，查找并返回资源
    fs.readFile(resPath, 'utf-8', (err, dataStr) => {
        if (err) return res.end('<h1>404 NOT FOUND</h1>');

        res.end(dataStr);
    });
});

// 为服务器绑定端口，开始运行
server.listen(80, () => { console.log('服务器开始运行！') });

