import fc from "./index";

const service = {};

// app 更新
service.appUpdate = async (url, filename) => {
  return fc.call(`appUpdate`, url, filename);
};

// 拨打电话
service.phonecall = async (number) => {
  return fc.call(`phonecall`, number);
};

// 外部浏览器打开网页
service.launchInExplorer = async (url) => {
  return fc.call(`launchInExplorer`, url);
};

// 内部浏览器打开网页
service.launchInnerExplorer = async (url) => {
  return fc.call(`launchInnerExplorer`, url);
};

// 扫描二维码
service.scanQR = async () => {
  return fc.call(`scannerQR`);
};

// 扫描条形码
service.scanBarcode = async () => {
  return fc.call(`scannerBarcode`);
};

// 混合扫描（二维码或条形码）
service.scan = async () => {
  return fc.call(`scanner`);
};

// 检测网络连接状态
service.checkNetworkType = async () => {
  return fc.call(`checkNetworkType`);
};

// 获取 safeHeights
service.getSafeHeight = async () => {
  return fc.call(`getSafeHeight`);
};

// 设置顶部条风格为深色
service.setTopbarStyleToDark = async () => {
  return fc.call(`setTopbarStyleToDark`);
};

// 设置顶部条风格为浅色
service.setTopbarStyleToLight = async () => {
  return fc.call(`setTopbarStyleToLight`);
};

// 去拍照
service.takePhoto = async () => {
  return fc.call(`takePhoto`);
};

// 震动(提醒)
service.vibrate = async () => {
  return fc.call(`vibrate`);
};

// 震动(触屏按键)
service.heavyImpact = async () => {
  return fc.call(`heavyImpact`);
};

// 将app设置为沉浸式渲染模式
service.immersed = async () => {
  return fc.call(`immersed`);
};

// 将app设置为非沉浸式渲染模式
service.unImmersed = async () => {
  return fc.call(`unImmersed`);
};

// 播放声音
service.beep = async () => {
  return fc.call(`beep`)
}

// 定时通知
service.notification = async (title, content) => {
  return fc.call(`notification`, title, content)
}

// 延时通知
service.periodNotification = async (title, content, timer) => {
  return fc.call(`periodNotification`, title, content, timer)
}

export default service;