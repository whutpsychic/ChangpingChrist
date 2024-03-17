declare module "@/flutter-core/index.js";

// 答案记录类
class Answerobj {
  index: number;
  a: string | number;
  constructor(index, a) {
    this.index = index;
    this.a = a;
  };
}

// 相册条目
class Album {
  name: string;
  date: string;
  num: number | Number;
  children: Array<string>;
  constructor(name, date, num, children) {
    this.name = name;
    this.date = date;
    this.num = num;
    this.children = children;
  };
}