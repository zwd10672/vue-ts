<!-- 任务主页 -->
<script setup lang="ts">
import { reactive } from 'vue'
import FooterTabber from '@/components/FooterTabber.vue'
import TaskList from '@/components/list/TaskList.vue'
const taskList = reactive([{ id: 1 }, { id: 2 }])
</script>
<template>
  <TaskList :taskList="taskList"></TaskList>
  <FooterTabber></FooterTabber>
</template>
<style scoped></style>
