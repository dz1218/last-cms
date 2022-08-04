<template>
  <div class="user">
    <div class="search">
      <dz-form :="searchFormConfig" :formData="formData"></dz-form>
    </div>
    <div class="content">
      <dz-table
        :listData="userList"
        :propList="propList"
        :showIndexColumn="showIndexColumn"
        :showSelectColumn="showSelectColumn"
        @selectChange="selectChange"
      >
        <template #status="scope">
          <el-button size="small" :type="scope.row.enable ? 'success' : 'danger'" plain>{{
            scope.row.enable ? '启用' : '禁止'
          }}</el-button>
        </template>
        <template #createAt="scope">
          <strong>{{ $filters.formatTime(scope.row.createAt) }}</strong>
        </template>
        <template #handle>
          <el-button size="small" type="text">编辑</el-button>
          <el-button size="small" type="text">删除</el-button>
        </template>
      </dz-table>
    </div>
  </div>
</template>

<script lang="ts">
import DzForm from '@/base-ui/form'
import { computed, defineComponent, reactive } from 'vue'
import { searchFormConfig } from './config/search.config'
import { useStore } from '@/store'
import DzTable from '@/base-ui/table'

export default defineComponent({
  name: 'user',
  props: {},
  components: {
    DzForm,
    DzTable
  },
  setup() {
    const formData = reactive({
      id: '',
      name: '',
      password: '',
      sport: '',
      creatTime: ''
    })

    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
    const userList = computed(() => store.state.system.userList)
    const userCount = computed(() => store.state.system.userCount)

    const propList = [
      { prop: 'name', label: '用户名', minWidth: '100' },
      { prop: 'realname', label: '真实姓名', minWidth: '100' },
      { prop: 'cellphone', label: '手机号码', minWidth: '100' },
      { prop: 'enable', label: '状态', minWidth: '100', slotName: 'status' },
      { prop: 'createAt', label: '创建时间', minWidth: '180', slotName: 'createAt' },
      { prop: 'updateAt', label: '更新时间', minWidth: '180', slotName: 'updateAt' },
      { label: '操作', minWidth: '120', slotName: 'handle' }
    ]

    const showIndexColumn = true
    const showSelectColumn = true

    const selectChange = (value: any) => {
      console.log(value)
    }

    return {
      searchFormConfig,
      userList,
      userCount,
      propList,
      showIndexColumn,
      showSelectColumn,
      selectChange,
      formData
    }
  }
})
</script>

<style scoped lang="less">
.content {
  padding: 0.5333rem;
  border-top: 0.5333rem solid #f5f5f5;
}
</style>
