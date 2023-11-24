<!-- 登录页 -->
<script setup lang="ts">
import { showLoadingToast } from 'vant'
</script>
<template>
  <div class="bgc">
    <van-icon name="arrow-left" class="icon-left"></van-icon>
    <div class="login-form">
      <h3>验证码登录</h3>
      <div class="login-form-item">
        <i class="icon-phone" />
        <input placeholder="请输入手机号" type="text" />
      </div>
      <div class="login-form-item">
        <i class="icon-code" />
        <input placeholder="请输入验证码" type="text" />
        <span>获取验证码</span>
      </div>
      <van-button type="primary" block>登录</van-button>
    </div>

    <div class="login-form-label">
      <van-checkbox v-model="checked" icon-size="16px">我已阅读</van-checkbox>
      <router-link to="/login/serviceAgree">《IT企业平台服务协议》</router-link
      >和
      <router-link to="/login/privacyPolicy">《隐私协议》</router-link>
    </div>
  </div>
</template>
<style scoped>
.bgc {
  height: 667px;
  background: #ffffff;
}
.icon-left {
  font-size: 0.8rem;
  margin: 0.67rem 0 0 0.67rem;
}
.login-form {
  padding: 0 1.07rem;
}
.login-form h3 {
  font-size: 1.39rem;
  line-height: 1.39rem;
  font-weight: 400;
  color: #333333;
  margin-top: 2.35rem;
  margin-bottom: 4rem;
  padding-left: 0.3rem;
}
.login-form-item {
  display: flex;
  font-size: 0.75rem;
  font-weight: 300;
  color: #9fa7ad;
  margin: 0 0.18rem 2rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid #e7e7e7;
  align-items: center;
}
.icon-phone {
  background: url('@/assets/img/icon/icon-phone.png');
  width: 1.01rem;
  height: 1.01rem;
  background-size: 100%;
}
.login-form-item input {
  flex: 1;
  margin-left: 0.48rem;
}
.icon-code {
  background: url('@/assets/img/icon/icon-code.png');
  width: 1.01rem;
  height: 1.01rem;
  background-size: 100%;
}
.login-form-item span {
  color: #fe9527;
  padding-left: 0.56rem;
  border-left: 1px solid #fe9527;
}
.van-button {
  background: linear-gradient(90deg, #fea829, #fe8f27);
  border-radius: 1.17rem;
  border: none;
  font-size: 0.96rem;
}
.login-form-label {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 1.5rem;
  left: 0;
  width: 100%;
  font-size: 0.62rem;
}
.van-checkbox {
}
</style>
