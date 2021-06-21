const Mock = require('mockjs')
const {getJson} = require('./utils')
const info = require('./data/items.js')

console.log('****************************');
console.log(info)
console.log('****************************');
const mockList = [
    info
]

module.exports = function(app) {
    mockList.forEach(mock => {
        if(mock.method === 'get') {
            app.get(mock.url, function(req, res) {
                
                res.json(Mock.mock(mock.result));
            });
        }
    })
}