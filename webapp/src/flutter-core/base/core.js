// =======================================
// 本模块为 flutter 与 h5 相互通信的对接模块
// 开发者：zbc
// 创建日期：2021-06-07
// 上次修改日期：2024-01-18
// =======================================
import { portName } from "./static";

const fcore = {};

// 预留的向 flutter 端发送一般信息的默认函数
fcore.call = (info) => {
  // 规范检测
  if (typeof info != "string")
    throw new Error("call函数中你传给flutter端的信息不是一个字符串,将无法识别!");
  // 平台检测
  if (!window[portName]) {
    console.error(
      "你所在的位置于flutter端没有注册通讯端口函数,请先行注册方可使用,或者联系zbc!"
    );
    console.warn(
      "如果你在非flutter端调试,调用flutter方法将不会产生任何作用,且不会影响你继续调试其他功能。"
    );
    return;
  }

  window[portName].postMessage(info);
};

export default fcore;