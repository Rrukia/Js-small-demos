// 格式化时间
function dateFormat(dateStr) {
    let dt = new Date(dateStr)

    let y = padZero(dt.getFullYear())
    let m = padZero(dt.getMonth() + 1)
    let d = padZero(dt.getDate())
    let hh = padZero(dt.getHours())
    let mm = padZero(dt.getMinutes())
    let ss = padZero(dt.getSeconds())

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}

// 转义HTML
function HTMLEscape(htmlstr) {
    return htmlstr.replace(/<|>|"|&/g, (match) => {
        switch (match) {
            case '<':
                return '&lt;'
            case '>':
                return '&gt;'
            case '"':
                return '&quot;'
            case '&':
                return '&amp;'
        }
    })
}

// 还原HTML
function HTMLUnEscape(str) {
    return str.replace(/&lt;|&gt;|&quot;|&amp;/g, (match) => {
        switch (match) {
            case '&lt;':
                return '<'
            case '&gt;':
                return '>'
            case '&quot;':
                return '"'
            case '&amp;':
                return '&'
        }
    })
}

// 定义补零函数
function padZero(n) {
    return n > 9 ? n : '0' + n
}

// 向外暴露接口
module.exports = {
    dateFormat,
    HTMLEscape,
    HTMLUnEscape
}