<!-- 消息主页 -->
<script setup>
import { reactive } from 'vue'
import MessageList from '@/components/list/MessageList.vue'
import FooterTabber from '@/components/FooterTabber.vue'
const messageList = reactive([{ id: 1 }])
</script>
<template>
  <MessageList :messageList="messageList"></MessageList>
  <FooterTabber></FooterTabber>
</template>
<style scoped></style>
