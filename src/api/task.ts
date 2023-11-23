import http from '../utils/request'

// 获取验证码
export function getCode(data: any) {
  return http({
    url: '/login/code',
    method: 'post',
    data: data,
  })
}
// 登录接口
export function login(data: any) {
  return http({
    url: '/login',
    method: 'post',
    data: data,
  })
}
