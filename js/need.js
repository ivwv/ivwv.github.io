// 增加版权
// 通过js调用dom元素，然后在 div.copyright 插入版权信息
const cr = document.querySelector("div.copyright");
// 通过encodeUrl 和 decodeUrl 进行编码和解码
cr.innerHTML += `${decodeURI(
  "%E7%89%88%E6%9D%83%E5%BD%92%E5%B1%9E%E4%BA%8E%E5%8E%9F%E4%BD%9C%E8%80%85:https://github.com/ivwv/ivwv.github.io/%20"
)}`;