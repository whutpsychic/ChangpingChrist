import fc from "./index";
import { argsSpliter } from "./base/static";

const service = {};

service.done = () => fc.call("done");

// app 更新
service.appUpdate = (url, filename) => {
  fc.call(`appUpdate${argsSpliter}${url}${argsSpliter}${filename}`);
};

// 拨打电话
service.phonecall = (number) => {
  fc.call(`phonecall${argsSpliter}${number}`);
};

// 内部浏览器打开网页
service.launchInExplorer = (url) => {
  fc.call(`launchInExplorer${argsSpliter}${url}`);
};

// 外部浏览器打开网页
service.launchInnerExplorer = (url) => {
  fc.call(`launchInnerExplorer${argsSpliter}${url}`);
};

// 扫描二维码
service.scanQR = () => {
  fc.call(`scannerQR`);
};

// 扫描条形码
service.scanBarcode = () => {
  fc.call(`scannerBarcode`);
};

// 混合扫描（二维码或条形码）
service.scan = () => {
  fc.call(`scanner`);
};

// 检测网络连接状态
service.checkNetworkType = () => {
  fc.call(`checkNetworkType`);
};

// 获取 safeHeights
service.getSafeHeight = () => {
  fc.call(`getSafeHeight`);
};

// 设置顶部条风格为深色
service.setTopbarStyleToDark = () => {
  fc.call(`setTopbarStyleToDark`);
};

// 设置顶部条风格为浅色
service.setTopbarStyleToLight = () => {
  fc.call(`setTopbarStyleToLight`);
};

// 去拍照
service.takePhoto = () => {
  fc.call(`takePhoto`);
};

// 震动(提醒)
service.vibrate = () => {
  fc.call(`vibrate`);
};

// 震动(触屏按键)
service.heavyImpact = () => {
  fc.call(`heavyImpact`);
};

// 将app设置为沉浸式渲染模式
service.immersed = () => {
  fc.call(`immersed`);
};

// 将app设置为非沉浸式渲染模式
service.unImmersed = () => {
  fc.call(`unImmersed`);
};

// 播放声音
service.beep = () => {
  fc.call(`beep`)
}

// 定时通知
service.notification = (title, content) => {
  fc.call(`notification${argsSpliter}${title}${argsSpliter}${content}`)
}

// 延时通知
service.periodNotification = (title, content, timer) => {
  fc.call(`periodNotification${argsSpliter}${title}${argsSpliter}${content}${argsSpliter}${timer}`)
}

export default service;