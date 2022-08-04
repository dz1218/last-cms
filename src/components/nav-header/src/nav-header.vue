<template>
  <div class="nav-header">
    <el-icon class="fold-menu">
      <template v-if="isFold"><Fold @click="handleFoldClick" class="fold-menu" /></template>
      <template v-else><Expand @click="handleFoldClick" class="fold-menu" /></template>
    </el-icon>
    <div class="content">
      <dz-breadcrumb :breadcrumbs="breadcrumbs"></dz-breadcrumb>
      <userInfo></userInfo>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { Fold, Expand } from '@element-plus/icons-vue'
import userInfo from './user-info.vue'
import dzBreadcrumb from '@/base-ui/breadcrumb'
// import { IBreadcrumb } from '@/base-ui/breadcrumb'
import { pathMapBreadcrumbs } from '@/utils/map-menus'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'
// import { use } from 'echarts/types/dist/shared'

export default defineComponent({
  emits: ['foldChange'],
  components: {
    Fold,
    Expand,
    userInfo,
    dzBreadcrumb
  },
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value

      emit('foldChange', isFold.value)
    }

    // 面包屑的数据[{name: "", path: ""}]
    const store = useStore()

    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus
      const route = useRoute()
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })

    return {
      isFold,
      handleFoldClick,
      breadcrumbs
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
