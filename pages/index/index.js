// index.js
// 获取应用实例
const app = getApp()

Page({
    data: {},
    onLoad() {
        wx.request({
            url: 'http://localhost:7250/test/index',
            method: 'GET',
            success(data) {
                console.log(data.data)
            }
        })
        wx.getStorage({
            key: "isLogin",
            success: function (res) {
                console.log(res);
            },
            fail() {
                wx.navigateTo({
                    url: '/pages/login/login',
                })
            }
        })
    }
})