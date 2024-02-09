// =======================================
// 本模块为 flutter 与 h5 相互通信的对接模块
// 开发者：zbc
// 创建日期：2024-01-15
// 上次修改日期：2024-01-18
// =======================================
import { portName, fnsKey } from "./base/static.js"
import fc from "./base/core.js";
import service_base from "./service_base.js";
import service_device from "./service_device.js";

const module = {};

// 初始化
// 此函数用于挂载默认设置,仅需在应用起始位置调用一次即可
module.init = async () => {
  window[fnsKey] = {};

  // 注册交互端口
  // 隐式监听
  return new Promise((resolve) => {
    window.addEventListener('message', (event) => {
      if (event.data === 'initFlutterPort') {
        if (event.ports[0] != null) {
          let targetPort = event.ports[0];
          // 全局记录
          window[portName] = targetPort;
          // 注册全部监听函数
          targetPort.onmessage = function (e) {
            const { data } = e;
            try {
              eval(`window.${fnsKey}.${data}`);
            }
            catch (err) {
              console.error(err);
            }
          }
          resolve(true);
        }
      }
    });
  })
};

// 注册从 flutter 端来的回调函数
module.await = (name, fn) => {
  window[fnsKey][name] = fn;
}

// 卸载函数
module.uninstall = (name) => {
  window[fnsKey][name] = undefined;
};

// *************************** 系统通用 ***************************
// // 注册/卸载函数
// module.register = fc.register;
// module.unregister = fc.unregister;

// 预留的万能通道函数
module.call = fc.call;

export default { ...module, ...service_base, ...service_device };