// map.js
var url=getApp().getUrl();
Page({
  data: {
  longitude:114.056,
  latitude:30.579,
  scale:18,
  markers:[{iconPath:"/images/marker.png",
  id:0,
  latitude: 30.579,
  longitude: 114.056,
  width:80,
  heigth:80,
  title:"蔡甸污水处理厂",
  callout:{
    content:"蔡甸污水处理厂项目部",
    color:"blue",
    fontSize:12,
    padding:22,
    bgColor:"gray",
    display:"BYCLICK"
  }
  }]
  },
  onLoad: function (options) {
  
  },
  onReady: function () {
  
  },
  onShow: function () {
  
  },
  onHide: function () {
  
  },
  onUnload: function () {
  
  },
  onPullDownRefresh: function () {
  
  },
  onReachBottom: function () {
  
  },
  onShareAppMessage: function () {
  
  }
})