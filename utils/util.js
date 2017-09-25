const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}



let httpAjax = (obj) => {
  let postBody = {
    url: `${obj.url}`,
    method: obj.method ? obj.method : 'post',
    contentType: obj.contentType ? obj.contentType : 'application/json'
  }
  if (obj.data) {
    //防止data是未转码并且含有"%"
    try {
      postBody.data = decodeURIComponent(JSON.stringify(obj.data));
    }
    catch (err) {
      postBody.data = JSON.stringify(obj.data);
    }
  }
  return new Promise((resolve, reject) => {
    wx.request({
      ...postBody,
      success: res => {
        if (res.statusCode !== 200) {
          wx.showToast({
            title: `c-${res.statusCode}`,
            duration: 1500
          });  
          reject(res);
        } else {
          if (res && res.error_tip) {
            wx.showToast({
              title: res.error_tip,
              //image: '',          
              duration: 1500
            })
            reject(res);
          } else {
            resolve(res.data);
          }
        }
      },
      fail: err => {
        reject(msg);
      }
    })
  })
}


module.exports = {
  formatTime: formatTime,
  httpAjax: httpAjax
}
