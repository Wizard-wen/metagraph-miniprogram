const util = require('../../utils/util.js');
const api = require('../../config/api.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        name: '',
        password: '',
        style: 'background: #eee; width: 680rpx; height: 80rpx;border-radius: 12rpx; margin: 0 auto 30rpx;padding: 8px 16px;'
    },
    loginByName() {
        if (this.data.name === '') {
            wx.showToast({ title: '请输入用户名' });
            return;
        }
        if (!this.data.password) {
            return;
        }
        util.request(api.LoginUrl, {
            name: this.data.name,
            password: this.data.password
        }, 'POST').then((data) => {
            console.log(data)
            wx.setStorage({
                key: 'user',
                data: data.data
            });
            wx.setStorage({
                key: 'isLogin',
                data: true
            })
            wx.switchTab({
                url: '/pages/home/index/index',
            })
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        wx.getStorage({
            key: "isLogin",
            success: function (res) {
                if (res.data == 1) //曾经登录过 直接通过
                {
                    wx.switchTab({
                        url: '/pages/index/index',
                    })
                }
            }
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})