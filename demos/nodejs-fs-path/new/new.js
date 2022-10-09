
        let form = document.querySelector('form')
        let ipt = document.querySelector('input');
        let timer = null;
        let cacheIpt = {};

        ipt.addEventListener('keyup', (e) => {
            let kw = ipt.value
            let ul = document.querySelector('ul')

            // 如果为空 => 清除列表并隐藏
            if (kw.length <= 0) {
                ul.innerHTML = ''
                ul.style.display = 'none'
                return 0
            }

            // 否则 getSuggestList()
            // 防抖
            clearTimeout(timer)
            timer = setTimeout(() => {
                getSuggestList(kw)
                ul.style.display = 'block'
            }, 500)

        })

        form.addEventListener('click', (e) => {
            if (e.target.tagName == 'LI') {
                let ipt = document.querySelector('input')
                btn = document.querySelector('button')
                // 填入内容并访问
                ipt.value = e.target.innerHTML
                btn.click()
            }
        })

        function getSuggestList(kw) {
            // 本地缓存有则直接读取，否则通过 jsonp 请求查询并缓存
            if (cacheIpt[kw]) {
                show(cacheIpt[kw])
            } else {
                $.ajax({
                    url: 'https://suggest.taobao.com/sug?q=' + kw,
                    dataType: 'jsonp',
                    success: (res) => {
                        cacheIpt[kw] = res;
                        show(res)
                    }
                })
            }
        }

        function show(res) {
            let ul = document.querySelector('ul')
            let arr = []
            for (let i = 0; i < res.result.length; i++) {
                arr.push('<li>' + res.result[i][0] + '</li>')
            }
            ul.innerHTML = arr.join('')
        }

    