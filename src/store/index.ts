import { createStore, Store, useStore as useVuexStore } from 'vuex'

import login from './login/index'
import { IRootState, IStoreType } from './types'

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

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
