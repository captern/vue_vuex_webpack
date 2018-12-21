import fetch from '../config/fetch'
// import {getStore} from '../config/mUtils'

// 获取首页轮播图
export const sliderItems = () => fetch('', {
  type: ''
})

// 地址拼接在连接里面的例子
export const currentcity = number => fetch('/v1/cities/' + number)

// 多个参数的get接口模式
export const searchplace = (cityid, value) => fetch('/v1/pois', {
  type: 'search',
  city_id: cityid,
  keyword: value
})

// 参数拼接的模式
export const msiteFoodTypes = geohash => fetch('/v2/index_entry', {
  geohash,
  group_type: '1',
  'flags[]': 'F'
})

// 复杂模式的get
export const shopList = (latitude, longitude, offset, restaurant_category_id = '', restaurant_category_ids = '', order_by = '', delivery_mode = '', support_ids = []) => {
  let supportStr = ''
  support_ids.forEach(item => {
    if (item.status) {
      supportStr += '&support_ids[]=' + item.id
    }
  })
  let data = {
    latitude,
    longitude,
    offset,
    limit: '20',
    'extras[]': 'activities',
    keyword: '',
    restaurant_category_id,
    'restaurant_category_ids[]': restaurant_category_ids,
    order_by,
    'delivery_mode[]': delivery_mode + supportStr
  }
  return fetch('/shopping/restaurants', data)
}

// post格式获取短信验证码

export const mobileCode = phone => fetch('/v4/mobile/verify_code/send', {
  mobile: phone,
  scene: 'login',
  type: 'sms'
}, 'POST')

// 简便的post格式
export const getcaptchas = () => fetch('/v1/captchas', {}, 'POST')

// 检测帐号是否存在
export const checkExsis = (checkNumber, type) => fetch('/v1/users/exists', {
  [type]: checkNumber,
  type
})

// 发送帐号
export const sendMobile = (sendData, captcha_code, type, password) => fetch('/v1/mobile/verify_code/send', {
  action: 'send',
  captcha_code,
  [type]: sendData,
  type: 'sms',
  way: type,
  password
}, 'POST')
