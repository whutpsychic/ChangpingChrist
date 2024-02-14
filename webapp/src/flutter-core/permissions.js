import fc from "./index";

const permissions = {};

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
permissions.openAppSettings = async () => {
  return fc.call("openAppSettings");
};

// 权限请求
// h5 通过 flutter 向设备请求权限
permissions.request = async (name) => fc.call(`pm_${name}`);

export default { ...permissions };