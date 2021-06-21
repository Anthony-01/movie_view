const fs = require('fs')

/**
 * @methods
 * @param url 请求的地址
*/
function getJson(url) {
    const ret = fs.readFileSync(path.resolve(__dirname, url));
    return JSON.parse(ret);
}

module.exports = {
    getJson
}