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
// 协议文件接口
export function getPolicy(data: any) {
  return http({
    url: 'policy_protocol/list',
    method: 'get',
    params: {
      data,
    },
  })
}
