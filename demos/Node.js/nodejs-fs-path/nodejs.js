let fs = require('fs');
let path = require('path');

let regCSS = /<style>[\s\S]*<\/style>/;
let regJS = /<script>[\s\S]*<\/script>/;

fs.readFile(path.join(__dirname, '/html.html'), 'utf-8', (err, data) => {
    if (err) return console.log('读取失败！', err.message);

    resolveCSS(data);
    resolveJS(data);
    resolveHTML(data);
    copyJQuery();

    function resolveCSS(data) {
        let txt = regCSS.exec(data)[0];
        txt = txt.replace('<style>', '').replace('</style>', '');
        fs.writeFile(path.join(__dirname, './new/new.css'), txt, (err) => { if (err) return console.log(err.message) });
    }

    function resolveJS(data) {
        let txt = regJS.exec(data)[0];
        txt = txt.replace('<script>', '').replace('</script>', '');
        fs.writeFile(path.join(__dirname, './new/new.js'), txt, (err) => { if (err) return console.log(err.message) });
    }

    function resolveHTML(data) {
        let txt = data.replace(regCSS, '<link rel="stylesheet" href="new.css">').replace(regJS, '<script src="new.js"></script>');
        fs.writeFile(path.join(__dirname, './new/new.html'), txt, (err) => { if (err) return console.log(err.message) });
    }

    function copyJQuery() {
        fs.readFile(path.join(__dirname, './jQuery.min.js'), 'utf-8', (err, data) => {
            if (err) return console.log('jQ读取失败', err.message);

            fs.writeFile(path.join(__dirname, './new/jQuery.min.js'), data, (err) => { if (err) return console.log(err.message); });

        })
    }
})

