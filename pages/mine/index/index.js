// pages/mine/mine.js
import Dialog from '@vant/weapp/dialog/dialog';
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    logout() {
        console.log(1111)
        Dialog.confirm({
            title: '退出登录',
            message: '确定要退出登录吗？'
        })
            .then(() => {
                // on confirm
                wx.setStorage({
                    key: 'isLogin',
                    data: false
                });
                wx.setStorage({
                    key: 'user',
                    data: {}
                });
                wx.navigateTo({
                    url: '/pages/login/login',
                })
            })
            .catch(() => {
                // on cancel
            });

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

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