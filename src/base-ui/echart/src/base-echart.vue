<template>
  <div class="base-echart">
    <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, PropType } from 'vue'

import * as echarts from 'echarts'
import { EChartsOption } from 'echarts/types/dist/shared'
// type EChartsOption = echarts.EChartsOption

export default defineComponent({
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    },
    option: {
      // type: EChartsOption,
      type: Object as PropType<EChartsOption>,
      default: () => ({})
    }
  },
  setup(props) {
    const echartDivRef = ref<HTMLElement>()

    onMounted(() => {
      const myEchart = echarts.init(echartDivRef.value!)

      myEchart.setOption(props.option)
    })

    return {
      echartDivRef
    }
  }
})
</script>

<style scoped></style>
