// 引入 mysql 模块
const mysql = require('mysql')

// 实例化 database
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'my_database_01'
})

let user;
let sqlStr;
// 使用 query 方法操作数据库
// 查询操作
sqlStr = 'SELECT * FROM users'
db.query(sqlStr, (err, results) => {
    if (err) return console.log(err)
    console.log(results)
})

// 1 插入数据 INSERT INTO ... (?,?)  VALUES (?,?)
    // 1.1 直接拼接字符串插入
    // 不建议使用 容易导致 SQL注入攻击
    sqlStr = 'INSERT INTO users (username, password) VALUES ("字符串插入", "111111")'

    db.query(sqlStr, (err, results) => {
        if (err) return console.log(err)
        if (results.affectedRows === 1) {
            console.log('插入成功')
        }
    })

    // 1.2 占位符插入
    user = {username: '占位符插入', password: '222222'}
    sqlStr = 'INSERT INTO users (username, password) VALUES (?, ?)'

    db.query(sqlStr, [user.username, user.password], (err, results) => {
        if (err) return console.log(err)
        if (results.affectedRows === 1) {
            console.log('插入成功')
        }
    })

    // 1.3 便捷占位符插入，直接传入对象
    user = {username: '便捷占位符插入', password: '333333'}
    sqlStr = 'INSERT INTO users SET ?'

    db.query(sqlStr, user, (err, results) => {
        if (err) return console.log(err)
        if (results.affectedRows === 1) {
            console.log('插入成功')
        }
    })

// 2 更新数据 UPDATE ... SET ?=?,?=? WHERE ?=?
    // 2.1 直接拼接字符串更新

    // 2.2 占位符更新
    user = {id: 1, username: '占位符更新', password: '222222'}
    sqlStr = 'UPDATE users SET username=?, password=? WHERE id=?'

    db.query(sqlStr,[user.username, user.password, user.id], (err, results) => {
        if (err) return console.log(err)
        if (results.affectedRows === 1) {
            console.log('更新成功')
        }
    })

    // 2.3 便捷占位符更新,直接传入对象
    user = {id: 2, username: '便捷占位符更新', password: '333333'}
    sqlStr = 'UPDATE users SET ? WHERE id=?'

    db.query(sqlStr, [user, user.id], (err, results) => {
        if (err) return console.log(err)
        if (results.affectedRows === 1) {
            console.log('更新成功')
        }
    })

// 3 删除 DELETE FROM ... WHERE ?=?
    // 3.1 直接删除
    user = {id: 1}
    sqlStr = 'DELETE FROM users WHERE id=?'

    db.query(sqlStr, user.id, (err, results) => {
        if (err) return console.log(err.message)
        if (results.affectedRows === 1) {
            console.log('删除成功')
        }
    })

    // 3.2 标记删除 ： 使用更新删除状态代替直接从数据库中删除
    user = {id: 1}
    sqlStr = 'UPDATE users SET status=1 WHERE id=?'

    db.query(sqlStr, user.id, (err, results) => {
        if (err) return console.log(err.message)
        if (results.affectedRows === 1) {
            console.log('删除成功')
        }
    })