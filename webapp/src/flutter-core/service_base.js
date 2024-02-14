import fc from "./index";

const service = {};

service.done = async () => fc.call("done");

// 短提示
service.toast = async (msg) => {
  return fc.call(`toast`, msg);
};

// 模态提示
service.modalTips = async (title, msg) => {
  return fc.call(`modalTips`, title, msg);
};

// 模态确认询问
service.modalConfirm = async (title, msg) => {
  return fc.call(`modalConfirm`, title, msg);
};

// 模态进度条展示
service.modalLoading = async (content) => {
  return fc.call(`modalLoading`, content);
};

// 模态进度条展示
service.modalProgress = async (content) => {
  return fc.call(`modalProgress`, content);
};

// 模态进度条设置值
service.modalProgressSet = async (value) => {
  return fc.call(`modalProgressSet`, value);
};

// 模态进度条增加值
service.modalProgressAdd = async (value) => {
  return fc.call(`modalProgressAdd`, value);
};

// 写入本地缓存值
service.recordLocal = async (key, value) => {
  return fc.call(`recordLocal`, key, value);
};

// 读取本地缓存值
service.readLocal = async (key) => {
  return fc.call(`readLocal`, key);
};

// 到ip地址配置处去
service.ipconfig = async () => {
  return fc.call(`ipConfig`);
};

export default service;