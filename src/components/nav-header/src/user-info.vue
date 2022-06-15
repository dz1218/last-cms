<template>
  <div>
    <div class="user-info">
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-icon class="el-icon--right"><avatar /></el-icon>
          <span class="name">{{ userName }}</span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>退出登录</el-dropdown-item>
            <el-dropdown-item divided>用户信息</el-dropdown-item>
            <el-dropdown-item divided>系统管理</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import { Avatar } from '@element-plus/icons-vue'

import { useStore } from '@/store'

export default defineComponent({
  components: {
    Avatar
  },
  setup() {
    const store = useStore()
    const userName = computed(() => store.state.login.userInfo.name)

    return {
      userName
    }
  }
})
</script>

<style scoped lang="less">
.el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;
}

.name {
  margin-left: 5px;
}
</style>
