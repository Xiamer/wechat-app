import { httpAjax } from '../../../utils/util';

function fnNetgetBannerList(callback) {
  return httpAjax({
    url: "https://api.ilovelook.cn/api/kolshop/gogoboi/coms/list?code=gogoboi",
    method: 'get'
  }).then(res => {
    if (callback && typeof callback === "function") {
      callback(res);
    }
  }).catch(err => { })
}

export {
  fnNetgetBannerList,
}