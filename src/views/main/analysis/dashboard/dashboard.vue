<template>
  <div class="dashboard">
    <h2>1233</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
// import { useStore } from 'vuex'
import dzCard from '@/base-ui/card'
// import BaseEchart from '@/base-ui/echart'

import * as echarts from 'echarts'
// type EChartsOption = echarts.EChartsOption;

export default defineComponent({
  name: 'dashboard',
  components: {
    // dzCard
    // BaseEchart
  },
  props: {},
  setup() {
    // const store = useStore()
    // store.dispatch('dashboardModule/getDashboardDataAction')
    // onMounted(() => {})
  }
})
</script>

<style scoped lang="less">
.content-row {
  margin-top: 10px;
}

.title {
  height: 50px;
  font-size: 40px;
  margin-bottom: 20px;
  text-align: left;
}
</style>
