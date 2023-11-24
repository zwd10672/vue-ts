<!-- 人才主页 -->
<script setup>
import { reactive } from 'vue'
import TalentList from '@/components/list/TalentList.vue'
import FooterTabber from '@/components/FooterTabber.vue'
const talentList = reactive([{ id: 1 }, { id: 2 }])
</script>
<template>
  <TalentList :talentList="talentList"></TalentList>
  <FooterTabber></FooterTabber>
</template>
<style scoped></style>
