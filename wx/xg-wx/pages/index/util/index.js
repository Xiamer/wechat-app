import *  as http from 'http.js';

function fnBsngetBannerList() {
  const that = this;
  return http.fnNetgetBannerList(function (res) {
    var resultArr = res.filter(v => v.component_type === 1)[0].component_list.map(v => {
      return {
        component_type: v.component_type,
        goodslist_id: v.goodslist_id,
        image_url: v.covers.length ? v.covers[0].url_small : ""
      }
    });
    that.setData({
      aBannerListData: resultArr
    })
  });
}



export { fnBsngetBannerList }