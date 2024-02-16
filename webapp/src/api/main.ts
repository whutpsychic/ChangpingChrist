import axios from '@/utils/main';

// 请求超时时间
const timeout: number = 5000;

const instance = axios.create({
  baseURL: '',
  timeout,
  headers: { 'X-Custom-Header': 'foobar' }
});

const api = {

  // 获取直播状态
  async getLiveState() {
    const _data = new FormData();
    _data.append('partyId', '37305');
    _data.append('page', '1');
    _data.append('num', '5');

    return instance.post(`http://45734.wx.cdn.aodianyun.com/wsp/index.php?r=dms/getHistoryMessage`, _data).then((res) => {
      // handle success
      const { Flag, List } = res.data;
      const notLiving = (Flag === 100) && (!!List && List.length <= 0);

      return !notLiving;
    }).catch(function (err) {
      // handle error
      console.log(err);
      return false;
    });
  }

};

export default api;
