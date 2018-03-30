// pages/detail/index.js
const firstPage =[{
  id:'1',
  title: 'NIV版圣经',
  description: '西方文论必读书目',
  cover:'../../images/bible.jpg'
},
  {
    id: '2',
    title: '理查二世',
    description: '莎剧“空王冠”系列第一部',
    cover: '../../images/Richard.jpg'},
  {
    id: '3',
    title: '亨利五世',
    description: '真 * 国王的演讲',
    cover: '../../images/henryV.jpeg'},
  {
    id: '4',
    title: '牡丹亭',
    description: '“玄幻巨制“',
    cover: '../../images/mudanting.jpeg'}]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    articles:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getArticles()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }

  ,getArticles: function() {
    setTimeout(() => {
      this.setData({
        articles: firstPage,
      })
    }, 1000)
  },

  toDetail: function(e) {
    let id=e.currentTarget.dataset.id
    wx.navigateTo({
      url: 'content?id=${}',
    })
  },

})