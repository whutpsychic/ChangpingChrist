import fc from "./index";
import { argsSpliter } from "./base/static";

const service = {};

service.done = () => fc.call("done");

// 短提示
service.toast = (msg) => {
  fc.call(`toast${argsSpliter}${msg}`);
};

// 模态提示
service.modalTips = (title, msg) => {
  fc.call(`modalTips${argsSpliter}${title}${argsSpliter}${msg}`);
};

// 模态确认询问
service.modalConfirm = (title, msg) => {
  fc.call(`modalConfirm${argsSpliter}${title}${argsSpliter}${msg}`);
};

// 模态进度条展示
service.modalLoading = (content) => {
  fc.call(`modalLoading${argsSpliter}${content}`);
};

// 模态进度条展示
service.modalProgress = (content) => {
  fc.call(`modalProgress${argsSpliter}${content}`);
};

// 模态进度条设置值
service.modalProgressSet = (value) => {
  fc.call(`modalProgressSet${argsSpliter}${value}`);
};

// 模态进度条增加值
service.modalProgressAdd = (value) => {
  fc.call(`modalProgressAdd${argsSpliter}${value}`);
};

// 写入本地缓存值
service.recordLocal = (key, value) => {
  fc.call(`recordLocal${argsSpliter}${key}${argsSpliter}${value}`);
};

// 读取本地缓存值
service.readLocal = (key) => {
  fc.call(`readLocal${argsSpliter}${key}`);
};

// 到ip地址配置处去
service.ipconfig = () => {
  fc.call(`ipConfig`);
};

export default service;