const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
const url = require('url');
const qs = require('querystring');

const index_page = fs.readFileSync('./index.ejs', 'utf8');
const login_page = fs.readFileSync('./login.ejs', 'utf8');
const style_css = fs.readFileSync('./style.css', 'utf8');

const max_num = 10; // 最大保管数
const filename = 'mydata.txt';
var message_data;
// TODO 未実装
// readFromFile(filename);

var server = http.createServer();

server.listen(3000);
console.log('Server start!');
