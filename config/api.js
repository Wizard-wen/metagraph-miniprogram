// 以下是业务服务器API地址
// 本机开发时使用
var WxApiRoot = 'http://192.168.31.92:7250/';
// 腾讯云测试使用
// var WxApiRoot = 'https://www.metagraph.design/api/';


module.exports = {
    LoginUrl: WxApiRoot + 'public/user/loginByName'
}