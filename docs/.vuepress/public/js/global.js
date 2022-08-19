// 全局js 插入在页面最顶部
// seo 优化基础网址
// document.querySelector('head > meta[property="og:url"]').content
// 'https://ivwv.github.io/'
// icon 图标
// document.querySelector('head > link[rel="apple-touch-icon"]').href;
// 'https://ivwv.github.io/logo.png'
// console.log("2");

/**
 * 注意
 * 1. 目前发现这里的js脚本会被执行两次
 */
// setTimeout(function () {
//   alert("2");
// }, 4000);
// alert("2");
// 监听网络请求情况 如果在5秒内没有加载完毕 那么就会跳转到备用网址
setInterval(function () {
  setInterval(() => {
    console.log(document.readyState);
  }, 1000);
  if (document.readyState != "complete") {
    window.location.href = `https://ivwv.netlify.app${window.location.pathname}`;
  }
}, 5000);
