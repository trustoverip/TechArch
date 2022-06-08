const fs = require('fs');
const showdown = require('showdown');
const replace = require('replace-in-file');

const classMap = {
    h1: 'ui large header',
    h2: 'ui medium header',
    h3: 'ui small header',
    h4: 'ui smallest header',
    ul: 'ui list',
    li: 'ui item'
}

const bindings = Object.keys(classMap)
    .map(key => ({
        type: 'output',
        regex: new RegExp(`<${key}(.*)>`, 'g'),
        replace: `<${key} class='${classMap[key]}' $1>`
    }));

const converter = new showdown.Converter({
    extensions: [...bindings]
});

function writeHTML(data) {
    console.log('📝 writing docs');
    fs.copyFileSync('./docs/.index.html', './docs/index.html');
    console.log(data)

    const options = {files: './docs/index.html', from: /<--- spec-body --->/g, to: converter.makeHtml(data),};
    replace(options, (error, results) => {
        if (error) {
            return console.error('Error occurred:', error);
        }
        console.log('✅ All done!\n', results);
    });
}

const readStream = fs.createReadStream('./spec.md', 'utf8');
let data = '';
console.log('📖 reading spec')
readStream.on('data', function (chunk) {
    data += chunk;
}).on('end', function () {
    writeHTML(data);
});