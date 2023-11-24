<script setup lang="ts">
import { useRouter } from 'vue-router'
const props = defineProps({
  messageList: {
    type: Array,
    default: () => [],
  },
})
// 根据path进行跳转
const router = useRouter()
const gotoDetail = id => {
  router.push('/message/talk/' + id)
}
</script>
<template>
  <dl
    v-for="(item, index) in messageList"
    :key="item.id"
    @click="gotoDetail(item.id)"
  >
    <dd>
      <img src="@/assets/img/icon/icon-message.png" alt="" />
      <span></span>
    </dd>
    <dt>
      <h3>北京驻场无忧有限公司<span>五分钟前</span></h3>
      <p>
        您好，我们这边在招聘前端开发工程师您好，我们这边在招聘前端开发工程师您好，我们这边在招聘前端开发工程师您好，我们这边在招聘前端开发工程师
      </p>
    </dt>
  </dl>
</template>
<style scoped>
dl {
  font-size: 0.64rem;
  color: #666666;
  padding: 0.9rem 0;
  margin: 0 0.67rem;
  border-bottom: 1px solid #eeeeee;
  display: flex;
  align-items: center;
}
dl dd {
  position: relative;
  margin-right: 0.56rem;
}
dl dd img {
  height: 2.61rem;
  width: 2.61rem;
}
dl dd span {
  position: absolute;
  top: 0;
  right: 0;
  width: 0.32rem;
  height: 0.32rem;
  background: #ff0000;
  border-radius: 50%;
}
dl dt {
}
dl dt h3 {
  line-height: 0.8rem;
  font-size: 0.8rem;
  font-weight: 500;
  color: #333;
  /* margin-top: 0.rem; */
}
dl dt h3 span {
  font-size: 0.64rem;
  font-weight: 100;
  float: right;
  color: #999999;
}
dl dt p {
  font-size: 0.69rem;
  line-height: 0.69rem;
  margin-top: 0.35rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
</style>
