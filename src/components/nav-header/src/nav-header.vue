<template>
  <div class="nav-header">
    <el-icon class="fold-menu">
      <template v-if="isFold"><Fold @click="handleFoldClick" class="fold-menu" /></template>
      <template v-else><Expand @click="handleFoldClick" class="fold-menu" /></template>
    </el-icon>
    <div class="content">
      <div>面包屑</div>
      <div>
        <userInfo></userInfo>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import { Fold, Expand } from '@element-plus/icons-vue'

import userInfo from './user-info.vue'

export default defineComponent({
  emits: ['foldChange'],
  components: {
    Fold,
    Expand,
    userInfo
  },
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value

      emit('foldChange', isFold.value)
    }

    return {
      isFold,
      handleFoldClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;

  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
