import request from '@/utils/request'

export function doLogin (info) {
  return request({
    url: 'v1/login',
    method: 'post',
    data: JSON.stringify({
      account: info.account,
      pass: info.pass
    })
  })
}

export function getInfo (token) {
  return request({
    url: '/v1/user_info',
    method: 'post',
    data: JSON.stringify({
      token: token
    })
  })
}
