<script setup lang="ts">
import { useRouter } from 'vue-router'
const props = defineProps({
  contractList: {
    type: Array,
    default: () => [],
  },
})
// 根据path进行跳转
const router = useRouter()
const gotoDetail = id => {
  router.push('/contract/details/' + id)
}
</script>
<template>
  <dl
    v-for="(item, index) in contractList"
    :key="item.key"
    @click="gotoDetail(item.id)"
  >
    <dd>
      <h3>移动端小程序前端开发开发工程师</h3>
      <span>履约中</span>
      <van-icon name="arrow"></van-icon>
    </dd>
    <dt>
      <label for="">公司名称</label>
      <span>北京驻场无忧科技有限公司</span>
    </dt>
    <dt>
      <label for="">合约类型</label>
      <span>技术服务</span>
    </dt>
    <dt>
      <label for="">合约周期</label>
      <span></span>
    </dt>
    <dt>
      <label for="">签约时间</label>
      <span></span>
    </dt>
    <dt>
      <label for="">合约进度</label>
      <span></span>
    </dt>
    <dt class="control-progress">
      <i></i>
      <i></i>
      <i></i>
      <i></i>
    </dt>
  </dl>
</template>
<style scoped>
dl {
  font-size: 0.64rem;
  color: #666666;
  padding: 1rem 0.7rem;
  border-bottom: 1px solid #eeeeee;
  background-color: #fff;
}
dl dd {
  display: flex;
  margin-bottom: 0.9rem;
  align-items: center;
}
dl dd h3 {
  flex: 1;
  font-size: 0.8rem;
  color: #333333;
  font-weight: 500;
}
dl dd span {
  text-align: right;
  font-size: 0.75rem;
  color: #ff9415;
}
dl dd i {
  font-size: 0.75rem;
}
dl dt {
  display: flex;
  margin-bottom: 0.72rem;
}
dl dt:last-child {
  margin-bottom: 0;
}
dl dt label {
  flex: 1;
}
dl dt span {
  text-align: center;
}
.control-progress {
  height: 0.53rem;
  width: 100%;
  display: flex;
}
.control-progress i {
  flex: 1;
  background: #f3f3f3;
  margin: 0 1px;
}
.control-progress i.green {
  background: #50d400;
}
.control-progress i.orange {
  background: #fe9215;
}
.control-progress i.red {
  background: #ff4800;
}
</style>
