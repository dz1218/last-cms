import { createStore } from 'vuex'

import login from './login/index'
import { IRootState } from './types'

import localCache from '@/utils/cache'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'daizhuo',
      age: 25
    }
  },
  modules: {
    login
  }
})

export function setLocalCache() {
  store.dispatch('login/loadLocalLoginCache')
}

export default store
