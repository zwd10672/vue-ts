<script setup lang="ts">
import { useRouter } from 'vue-router'
const props = defineProps({
  taskList: {
    type: Array,
    default: () => [],
  },
})
// 根据path进行跳转
const router = useRouter()
const gotoDetail = id => {
  router.push('/task/details/' + id)
}
</script>
<template>
  <div
    class="task-item"
    v-for="(item, index) in taskList"
    :key="item.id"
    @click="gotoDetail(item.id)"
  >
    <div class="task-item-top">
      <h3>移动端小程序前端开发</h3>
      <span>紧急</span>
    </div>
    <dl>
      <dt>
        <h5>任务预算</h5>
        <strong>￥1000</strong>
      </dt>
      <dt>
        <h5>任务周期</h5>
        <strong>90天</strong>
      </dt>
      <dt>
        <h5>服务方式</h5>
        <strong>驻场</strong>
      </dt>
    </dl>
    <p>
      任务要求：混合开发小程序，与后端对接接口，又2年以上web前端开
      发经验，能够独立开展Web前端开发工作发经验，能够独立开展Web前端开发工作发经验，能够独立开展Web前端开发工作
    </p>
    <div class="task-item-bottom">
      <label>北京驻场无忧科技有限公司</label>
      <span><van-icon name="location-o" />北京</span>
    </div>
  </div>
</template>
<style scoped>
.task-item {
  background: #ffffff;
  border-radius: 0.53rem;
  margin: 0.29rem 0.64rem 0.53rem;
  padding: 0.88rem 0.48rem 0.75rem;
  position: relative;
  font-size: 0.69rem;
  font-weight: 100;
  color: #999999;
}
.task-item-top {
  display: flex;
}
.task-item-top h3 {
  margin-left: 0.3rem;
  font-size: 0.91rem;
  line-height: 0.91rem;
  font-weight: 400;
  color: #333333;
  margin-bottom: 1.01rem;
}
.task-item-top span {
  position: absolute;
  right: 0;
  width: 2.29rem;
  height: 1.08rem;
  line-height: 1.08rem;
  text-align: center;
  font-size: 0.59rem;
  color: #ffffff;
  border-radius: 0.53rem 0 0 0.53rem;
  background: linear-gradient(90deg, #fea829, #fe8f27);
}
dl {
  display: flex;
  margin-bottom: 0.96rem;
}
dl dt {
  margin-right: 0.69rem;
}
dl dt h5 {
  font-size: 0.69rem;
  line-height: 0.69rem;
  margin-bottom: 0.53rem;
  color: #999999;
}
dl dt strong {
  font-size: 0.64rem;
  font-weight: 500;
  color: #333333;
}
.task-item p {
  color: #333333;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.task-item-bottom {
  display: flex;
  border-top: 1px solid #f5f5f5;
  margin-top: 0.72rem;
  padding-top: 0.72rem;
  line-height: 0.69rem;
}
.task-item-bottom label {
  flex: 1;
}
.task-item-bottom span {
  text-align: right;
}
.task-item-bottom i {
  font-size: 0.8rem;
  font-weight: 600;
  margin-right: 0.1rem;
}
</style>
