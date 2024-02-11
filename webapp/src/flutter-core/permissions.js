import fc from "./index";
import { portName, fnsKey } from "./base/static";

const permissions = {};

// 所有权限列表
permissions.permissionList = ["camera", "storage"];

// flutter 权限状态表
permissions.status = {
  // 未经申请，需要向系统申请
  denied: "PermissionStatus.denied",
  // 允许或本次允许
  granted: "PermissionStatus.granted",
  // 设备不允许触碰此规则，需要打开系统设置界面进行设定权限(iOS)
  restricted: "PermissionStatus.restricted",
  // 受限的授权(iOS14+)
  limited: "PermissionStatus.limited",
  // 未授权状态，需打开系统设置改变权限
  permanentlyDenied: "PermissionStatus.permanentlyDenied",
}

// 打开App权限设置
permissions.openAppSettings = () => {
  fc.call("openAppSettings");
};

// 注册回调函数
permissions.await = (name, fn) => {
  window[fnsKey][name] = fn;
}

// 卸载函数
permissions.uninstall = (name) => {
  window[fnsKey][name] = undefined;
};

// 权限请求
// h5 通过 flutter 向设备请求权限
permissions.request = (permissionName) => {
  // 规范检测
  if (typeof permissionName != "string")
    throw new Error("permissions.request函数中你传给flutter端的信息不是一个字符串,将无法识别!");
  else {
    let valid = false;
    for (let it of permissions.permissionList) {
      if (it === permissionName) {
        valid = true;
        break;
      }
    }
    if (!valid) {
      throw new Error("requestPermission函数中你请求的权限不存在!");
    }
  }

  // 平台检测
  if (!window[portName]) {
    console.error(
      "你所在的位置于flutter端没有注册requestPermission函数,请先行注册方可使用,或者联系zbc!"
    );
    console.warn(
      "如果你在非flutter端调试,那么requestPermission函数将不会产生任何作用,且不会影响你继续调试其他功能。"
    );
    return;
  }

  window[portName].postMessage(permissionName);
};

export default { ...permissions };