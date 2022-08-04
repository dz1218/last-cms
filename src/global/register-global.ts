import { App } from 'vue'

import formatDate from '@/utils/format-date'

export default function (app: App): void {
  app.config.globalProperties.$filters = {
    formatTime(value: string) {
      return formatDate(value)
    }
  }
}
