// =======================================
// 本模块为 flutter 与 h5 相互通信的对接模块
// 配合 inappwebview 模块使用
// 开发者：zbc
// 创建日期：2024-01-15
// 上次修改日期：2024-02-14
// =======================================
import fc from "./base/core.js";
import service_base from "./service_base.js";
import service_device from "./service_device.js";

const module = {};

// 初始化
// 此函数用于挂载默认设置,仅需在应用起始位置调用一次即可
module.init = async () => {
  return new Promise((resolve, reject) => {
    try {
      window.addEventListener("flutterInAppWebViewPlatformReady", (event) => {
        sessionStorage.setItem('flutterInAppWebViewPlatformReady', true);
        resolve(true);
      })
    }
    catch (err) {
      console.error(err);
      reject(err);
    }
  })

};

// *************************** 系统通用 ***************************
// 预留的万能通道函数
module.call = fc.call;

export default { ...module, ...service_base, ...service_device };