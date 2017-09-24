function setCookie(key, value) {
  let cookie = wx.getStorageSync('cookie') || {};
  cookie[key] = value;
  wx.setStorageSync('cookie', cookie);
}

function getCookie(key) {
  let cookie = wx.getStorageSync('cookie') || {};
  return cookie[key];
}

export {
  setCookie,
  getCookie
}