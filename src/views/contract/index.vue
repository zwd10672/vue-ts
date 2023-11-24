<!-- 合约主页 -->
<script setup>
import { reactive } from 'vue'
import FooterTabber from '@/components/FooterTabber.vue'
import ConstractList from '@/components/list/ConstractList.vue'
const contractList = reactive([{ id: 1 }, { id: 2 }])
</script>
<template>
  <ConstractList :contractList="contractList"></ConstractList>
  <FooterTabber></FooterTabber>
</template>
<style scoped></style>
